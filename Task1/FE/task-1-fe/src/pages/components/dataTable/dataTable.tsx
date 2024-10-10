import { Table, Select, Pagination, TimePicker, Button } from "antd";
import { columns } from "@/pages/data/column";
import { Record } from "../../../../interface/Record";
import { useFetchData } from "@/pages/api/useFectData";
import type { PaginationProps } from "antd";
import { options } from "@/pages/data/select";
import { useRef, useState } from "react";
const { RangePicker } = TimePicker;
import { formatCurrency } from "../../../../utils/currenciesFormat";
import toast from "react-hot-toast";
import { sendData } from "@/pages/api/sendData";

export default function DataTable() {
  const [limit, setLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);

  //refs
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const { data, total, totalRevenue, mutate } = useFetchData<Record>(
    "http://localhost:2000/api/data",
    currentPage, // page
    limit, // limit
    start, // startTime
    end
  );

  const handleFileChange = async () => {
    if (inputFileRef.current) {
      const file = inputFileRef.current.files?.[0];
      if (file) {
        const upload = sendData(file, "http://localhost:2000/api/upload");
        await toast.promise(upload, {
          loading: "Loading...",
          success: <b>File uploaded!</b>,
          error: <b>Somethings wrong</b>,
        });
        await mutate();
      } else {
        toast("No file selected.");
      }
    }
  };

  const onChangePagination: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <div className="w-full flex flex-col gap-2 flex-1 pl-3">
          <Select
            className="!w-1/2"
            defaultValue={limit}
            style={{ width: 120 }}
            options={options}
            placeholder="select limit"
            onChange={(value) => {
              setLimit(value);
            }}
          />
          <RangePicker
            className="w-1/2"
            onChange={(value, dateString) => {
              setStart(dateString[0]);
              setEnd(dateString[1]);
            }}
          />
        </div>

        <div className=" flex-1 flex justify-end ">
          <div className="flex flex-col gap-2">
            <span className="text-black ">
              Tổng tiền: {formatCurrency(totalRevenue)}
            </span>
            <input
              type="file"
              className="hidden"
              ref={inputFileRef}
              onChange={handleFileChange}
              accept=".xlsx"
            />
            <Button
              type="primary"
              onClick={() => {
                inputFileRef?.current.click();
              }}
            >
              Upload file
            </Button>
          </div>
        </div>
      </div>
      <Table<Record>
        scroll={{ x: "max-content" }}
        rowKey={"CHI TIẾT DOANH THU"}
        columns={columns}
        pagination={false}
        dataSource={data}
      />
      <div className="w-full mt-4">
        <Pagination
          align="center"
          defaultCurrent={1}
          total={total}
          onChange={onChangePagination}
          showSizeChanger={false}
          showQuickJumper
        />
      </div>
    </div>
  );
}
