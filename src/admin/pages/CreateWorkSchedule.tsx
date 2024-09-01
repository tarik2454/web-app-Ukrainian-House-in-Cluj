import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PageTitle from '../../shared/components/PageTitle';
import Button from '../../shared/components/Button';
import AdminFormItem from '../components/AdminFormItem';

interface EventFormData {
  title: string;
  description: string;
  eventDate: {
    date: string;
    time: string;
    location: string;
  };
  date: string;
}

export default function CreateWorkSchedule() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<EventFormData>({
    defaultValues: {
      title: '',
      description: '',
      eventDate: {
        date: '',
        time: '',
        location: '',
      },
      date: '',
    },
  });

  const onSubmit: SubmitHandler<EventFormData> = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <PageTitle
        styles={
          'font-inherit text-normal font-normal tracking-tight text-gray-900 pb-2 border-b-[1px] border-gray-300'
        }
      >
        Створити подію
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <AdminFormItem
            labelText={'Назва події'}
            type={'text'}
            id={'title'}
            name={'title'}
            register={register}
            error={errors.title}
            validation={{ required: 'Поле обов’язкове для заповнення' }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <AdminFormItem
            labelText={'Дата проведення'}
            type={'date'}
            id={'date'}
            name={'date'}
            register={register}
            error={errors.date}
            validation={{ required: 'Поле обов’язкове для заповнення' }}
          />

          <AdminFormItem
            labelText={'Опис події'}
            type={'textarea'}
            id={'description'}
            name={'description'}
            register={register}
            error={errors.description}
            validation={{ required: 'Поле обов’язкове для заповнення' }}
          />

          <AdminFormItem
            labelText={'Дата події'}
            type={'text'}
            id={'eventDateDate'}
            name={'eventDate.date'}
            register={register}
          />

          <AdminFormItem
            labelText={'Час події'}
            type={'text'}
            id={'eventDateTime'}
            name={'eventDate.time'}
            register={register}
          />

          <AdminFormItem
            labelText={'Локація події'}
            type={'text'}
            id={'eventDateLocation'}
            name={'eventDate.location'}
            register={register}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type={'submit'}
            styles={
              'px-4 py-2 bg-gray-800  text-gray-300 rounded hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white'
            }
          >
            Опублікувати
          </Button>
        </div>
      </form>
    </>
  );
}
