
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData =Yup.InferType<typeof schema>



const schema = Yup.object().shape({
  dateOfBirth: Yup.date().required('تاریخ تولد الزامی است'),
  photo: Yup.mixed().required('عکس الزامی است'),
});

const Validation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
   console.log(data);
  };

  return (
    
    <form onSubmit={handleSubmit(handleFormSubmit)} >
      <div>
        <label htmlFor="dateOfBirth">تاریخ تولد:</label>
        <input type="date" id="dateOfBirth" {...register('dateOfBirth')} />
        {errors.dateOfBirth && (
          <span >{errors.dateOfBirth.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="photo">عکس:</label>
        <input type="file" id="photo" accept="image/*" {...register('photo')} />
        {errors.photo && (
          <span >{errors.photo.message}</span>
        )}
      </div>
      <button type="submit">ثبت</button>
    </form>
  );
};

export default Validation;