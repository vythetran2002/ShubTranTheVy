import type { TableProps } from "antd";
import { Record } from "../../../interface/Record";

export const columns: TableProps<Record>["columns"] = [
  {
    title: "STT",
    dataIndex: "CHI TIẾT DOANH THU",
    key: "index",
    render: (text: string) => (
      <p className="font-bold" key={text}>
        {text}
      </p>
    ),
  },
  {
    title: "Ngày",
    dataIndex: "__EMPTY",
    key: "date",
    render: (text: string) => <p className="text-center w-full">{text}</p>,
  },
  {
    title: "Giờ",
    dataIndex: "__EMPTY_1",
    key: "time",
    render: (text: string) => <p className="text-center w-full">{text}</p>,
  },
  {
    title: "Trạm",
    dataIndex: "__EMPTY_2",
    key: "station",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Mặt hàng",
    dataIndex: "__EMPTY_3",
    key: "gasType",
    render: (text: string) => <p className="text-center w-full">{text}</p>,
  },
  {
    title: "Số lượng",
    dataIndex: "__EMPTY_4",
    key: "quantity",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Đơn giá",
    dataIndex: "__EMPTY_5",
    key: "price",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Thành tiền",
    dataIndex: "__EMPTY_6",
    key: "total",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Thành tiền",
    dataIndex: "__EMPTY_7",
    key: "total",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Trạng thái thanh toán",
    dataIndex: "__EMPTY_8",
    key: "payMethod",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Mã khách hàng",
    dataIndex: "__EMPTY_9",
    key: "clientId",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Tên khách hàng",
    dataIndex: "__EMPTY_10",
    key: "clientName",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Loại khách hàng",
    dataIndex: "__EMPTY_11",
    key: "clientType",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Ngày thanh toán",
    dataIndex: "__EMPTY_12",
    key: "paymentDate",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Nhân viên",
    dataIndex: "__EMPTY_13",
    key: "staff",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Biến số xe",
    dataIndex: "__EMPTY_14",
    key: "vehicleId",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
  {
    title: "Tráng thái hoá đơn",
    dataIndex: "__EMPTY_15",
    key: "billStatus",
    render: (text: string) => <p className="text-center">{text}</p>,
  },
];
