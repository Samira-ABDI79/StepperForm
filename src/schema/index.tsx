import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("نام را وارد کنید"),
  lastName: yup.string().required("نام خانوادگی را وارد کنید"),
  // dateOfBirth: yup.date().required('تاریخ تولد الزامی است'),

  city: yup.string().required("شهر خود را انتخاب کنید"),


});
