import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools';
import './BookForm.scss';
import { z } from 'zod';
type Props = {};

const zodSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  address: z.string().nonempty('Adress is required'),
  dishName: z.string().nonempty('Dish name is required'),
  phNumber: z.string().nonempty('Number is required'),
});
type FormState = z.infer<typeof zodSchema>;
// eslint-disable-next-line no-empty-pattern
export default function BookForm({}: Props) {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormState>({
    defaultValues: {},
    mode: 'all',
    resolver: zodResolver(zodSchema),
  });
  const onSubmit: SubmitHandler<FormState> = () => {
    console.log(getValues());
  };
  return (
    <div className='book' data-testid='bookForm'>
      <h2>Book your meal!</h2>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className='form-labels'>
          <label htmlFor='firstName'>First name</label>
          <input type='text' id='firstName' {...register('firstName')} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className='form-labels'>
          <label htmlFor='lastName'>Last name</label>
          <input type='text' id='lastName' {...register('lastName')} />
          <p>{errors.lastName?.message}</p>
        </div>
        <div className='form-labels'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' {...register('address')} />
          <p>{errors.address?.message}</p>
        </div>
        <div className='form-labels'>
          <label htmlFor='dishName'>Dish name</label>
          <input type='text' id='dishName' {...register('dishName')} />
          <p>{errors.dishName?.message}</p>
        </div>
        <div className='form-labels'>
          <label htmlFor='phNumber'>Your phone number</label>
          <input
            type='text'
            id='phNumber'
            {...register('phNumber', {
              minLength: {
                value: 10,
                message: 'The minimum length is 10',
              },
            })}
          />
          <p>{errors.phNumber?.message}</p>
        </div>
        <div className='buttons'>
          <button onClick={() => reset()}>Reset</button>
          <button type='submit' className='submit' disabled={!isValid}>
            Add to cart
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
