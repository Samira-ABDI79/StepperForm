import * as Yup from "yup";

export type FormData = Yup.InferType<typeof schema>;
export const schema = Yup.object().shape({
  photo: Yup.mixed().required("عکس الزامی است"),
});
