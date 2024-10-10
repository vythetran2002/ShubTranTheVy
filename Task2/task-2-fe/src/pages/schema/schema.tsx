import * as yup from "yup";

export const formSchema = yup
  .object({
    time: yup.date().required("Thời gian là bắt buộc"),
    quantity: yup
      .number()
      .typeError("Số lượng phải là số")
      .positive("Số lượng phải là số dương")
      .required("Số lượng là bắt buộc"),
    station: yup.string().required("Chọn trụ là bắt buộc"),
    revenue: yup
      .number()
      .typeError("Doanh thu phải là số")
      .positive("Doanh thu phải là số dương")
      .required("Doanh thu là bắt buộc"),
    price: yup
      .number()
      .typeError("Đơn giá phải là số")
      .positive("Đơn giá phải là số dương")
      .required("Đơn giá là bắt buộc"),
  })
  .required();
