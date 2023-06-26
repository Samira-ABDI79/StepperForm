import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("نام را وارد کنید")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),
  lastName: yup
    .string()
    .required("نام خانوادگی را وارد کنید")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),
  // dateOfBirth: yup.date().required('تاریخ تولد الزامی است'),

  city: yup.string().required("شهر خود را انتخاب کنید"),
});
