import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("لطفا نام محصول را وارد کنید")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),
  description: yup
    .string()
    .required("لطفا توضیحات مربوط به محصول را وارد کنید ")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),

  //   photo: yup.mixed().required("عکس الزامی است"),
});
