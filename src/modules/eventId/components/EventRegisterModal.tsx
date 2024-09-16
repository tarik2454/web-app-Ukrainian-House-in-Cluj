import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

import validationSchema from '../helpers/validation-schema';
import FormItem from '../../../shared/components/FormItem';
import Button from '../../../shared/components/Button';

interface FormData {
  fullName: string;
  email: string;
  number: string;
  birthDate: string;
  telegram: string;
  textarea?: string;
}

export default function EventRegisterModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormItem
        labelText={`Призвище та ім'я`}
        type="text"
        id="fullName"
        name="fullName"
        register={register}
        error={errors.fullName}
        control={control}
      />
      <FormItem
        labelText="Email"
        type="email"
        id="email"
        name="email"
        register={register}
        error={errors.email}
        control={control}
      />
      <FormItem
        labelText="Номер телефону"
        type="tel"
        id="number"
        name="number"
        register={register}
        error={errors.number}
        control={control}
      />
      <FormItem
        labelText="Дата народження"
        type="date"
        id="birthDate"
        name="birthDate"
        register={register}
        error={errors.birthDate}
        control={control}
      />
      <FormItem
        labelText="Нікнейм в Telegram"
        type="text"
        id="telegram"
        name="telegram"
        placeholder="@username"
        register={register}
        error={errors.telegram}
        control={control}
      />
      <FormItem
        labelText="Коментар"
        type="textarea"
        id="textarea"
        name="textarea"
        register={register}
        error={errors.textarea}
        control={control}
        style={{
          maxHeight: 'calc(1.5em * 8)',
        }}
      />

      <div className="flex justify-center mt-4">
        <Button type="submit">Відправити</Button>
      </div>
    </form>
  );
}
