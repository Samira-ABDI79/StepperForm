import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().required('نام را وارد کنید'),
    lastName: yup.string().required('نام خانوادگی را وارد کنید'),
    // date: yup.string().required('تاریخ تولد را وارد کنید'),
    city: yup.string().required('شهر خود را انتخاب کنید'),
    // file: yup
    //   .mixed()
    //   .required('Please select a file')
     
  });
  