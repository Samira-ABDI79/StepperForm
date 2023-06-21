// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// interface FormData {
//   dateOfBirth: Date;
//   photo: FileList;
// }

// interface ValidationProps {
//   onSubmit: (data: FormData) => void;
// }

// // const schema = Yup.object().shape({
// //   dateOfBirth: Yup.date().required('تاریخ تولد الزامی است'),
// //   photo: Yup.mixed().required('عکس الزامی است'),
// // });

// const Validation: React.FC<ValidationProps> = () => {
//   // const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
//   //   resolver: yupResolver(schema),
//   // });

//   const handleFormSubmit = (data: FormData) => {
//     // onSubmit(data);
//   };

//   return (
//     // onSubmit={handleSubmit(handleFormSubmit)}
//     <form >
//       <div>
//         {/* <label htmlFor="dateOfBirth">تاریخ تولد:</label>
//         <input type="date" id="dateOfBirth" {...register('dateOfBirth')} />
//         {errors.dateOfBirth && (
//           <span role="alert">{errors.dateOfBirth.message}</span>
//         )}
//       </div>
//       <div>
//         <label htmlFor="photo">عکس:</label>
//         <input type="file" id="photo" accept="image/*" {...register('photo')} />
//         {errors.photo && (
//           <span role="alert">{errors.photo.message}</span>
//         )} */}
//       </div>
//       <button type="submit">ثبت</button>
//     </form>
//   );
// };

// export default Validation;