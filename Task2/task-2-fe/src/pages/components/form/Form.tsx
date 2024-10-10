import React, { useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField, Select, MenuItem, Typography } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/pages/schema/schema";
import toast from "react-hot-toast";

interface Data {
  time: Date;
  quantity: number;
  station: string;
  revenue: number;
  price: number;
}

function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Data> = (data: Data) => {
    toast.success("Thêm thông tin thành công");
    console.log(data);
  };

  useEffect(() => {
    if (Object.values(errors).length > 0)
      toast.error("Vui lòng điền đầy đủ thông tin");
  }, [errors]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        className="mt-9 p-4 flex flex-col gap-3 w-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          type="submit"
          className="w-fit rounded-md bg-[#2970FF] text-[13px] px-3 py-2 duration-200 hover:bg-[#3b82f6] mb-3 font-semibold"
        >
          Cập nhật
        </button>
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <DateTimePicker
              {...field}
              label="Thời gian"
              slotProps={{
                textField: {
                  variant: "standard",
                  focused: true,
                  error: !!errors.time,
                  //   helperText: errors.time?.message,
                },
              }}
              ampm={false}
              format="DD/MM/YYYY HH:mm:ss"
              disablePast
              views={["year", "month", "day", "hours", "minutes", "seconds"]}
              sx={{
                width: "100%",
                maxWidth: "300px",
                "& .MuiInputBase-root": {
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "13px",
                  margin: "0",
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  fontWeight: 600,
                  backgroundColor: "white",
                },
                "& .MuiInputLabel-root": {
                  fontWeight: 600,
                },
              }}
            />
          )}
        />

        {errors.time && (
          <Typography color="error" className="text-[13px] ml-2">
            {errors.time.message}
          </Typography>
        )}

        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Số lượng"
              placeholder="Nhập số lượng"
              variant="standard"
              error={!!errors.quantity}
              //   helperText={errors.quantity?.message}
            />
          )}
        />

        {errors.quantity && (
          <Typography color="error" className="text-[13px] ml-2">
            {errors.quantity.message}
          </Typography>
        )}

        <div className="border-[#ebedf0] border-[1px] rounded-[10px] flex flex-col max-w-[500px]">
          <Typography className="ml-[10px] mt-[10px] text-[13px] font-semibold text-[#a6a6a6]">
            Trụ
          </Typography>
          <Controller
            name="station"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                error={!!errors.station}
                sx={{
                  "& .MuiSelect-select": {
                    padding: "0px 10px 10px 10px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:before": {
                    border: "none",
                  },
                  "&:after": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="Xăng Ron A95">Xăng Ron A95</MenuItem>
                <MenuItem value="Xăng Ron A92">Xăng Ron A92</MenuItem>
                <MenuItem value="Dầu DO 0,05-II">Dầu DO 0,05-II</MenuItem>
              </Select>
            )}
          />
        </div>

        {errors.station && (
          <Typography color="error" className="text-[13px] ml-2">
            {errors.station.message}
          </Typography>
        )}

        <Controller
          name="revenue"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Doanh thu"
              placeholder="Nhập doanh thu"
              variant="standard"
              error={!!errors.revenue}
              //   helperText={errors.revenue?.message}
            />
          )}
        />

        {errors.revenue && (
          <Typography color="error" className="text-[13px] ml-2">
            {errors.revenue.message}
          </Typography>
        )}

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Đơn giá"
              placeholder="Nhập đơn giá"
              variant="standard"
              error={!!errors.price}
              //   helperText={errors.price?.message}
            />
          )}
        />

        {errors.price && (
          <Typography color="error" className="text-[13px] ml-2">
            {errors.price.message}
          </Typography>
        )}
      </form>
    </LocalizationProvider>
  );
}

export default Form;
