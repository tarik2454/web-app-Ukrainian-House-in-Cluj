import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PageTitle from '../../shared/components/PageTitle';
import Button from '../../shared/components/Button';
import AdminFormItem from '../components/AdminFormItem';

interface EventFormData {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  file?: FileList;
}

export default function CreateNews() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<EventFormData>({
    defaultValues: {
      title: '',
      description: '',
      date: '',
    },
  });

  const filePreparation = (file: File | null) => {
    if (!file) {
      setPreviewImg(null);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setPreviewImg(null);
      setFileError('Розмір файлу повинен бути не більше 2 МБ');
      return;
    }

    setFileError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
    };
    reader.readAsDataURL(file);

    console.log(file);
  };

  const handleChangeImg = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files ? event.target.files[0] : null;
    filePreparation(file);
  };

  const onSubmit: SubmitHandler<EventFormData> = data => {
    if (fileError) {
      return;
    }
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setPreviewImg(null);
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
        Створити новину
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <AdminFormItem
            labelText={'Назва новини'}
            type={'text'}
            id={'title'}
            name={'title'}
            register={register}
            error={errors.title}
            validation={{ required: 'Поле обов’язкове для заповнення' }}
          />
        </div>

        <div className="grid grid-cols-[_1fr,_2fr] gap-8">
          <div>
            <div className="flex justify-center items-center w-full h-[280px] bg-black-100 bg-cover bg-center overflow-hidden relative">
              <input
                type="file"
                id="file"
                className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-20"
                accept="image/png, image/jpeg, image/jpg"
                {...register('file', {
                  onChange: handleChangeImg,
                })}
              />
              <span className="text-white absolute z-10">
                Виберіть зображення
              </span>
              {previewImg && <img src={previewImg} alt="Preview" />}
            </div>
            {errors.file && !fileError && (
              <span className="error">{errors.file.message}</span>
            )}
            {fileError && <span className="error">{fileError}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <AdminFormItem
              labelText={'Дата створення'}
              type={'date'}
              id={'date'}
              name={'date'}
              register={register}
              error={errors.date}
              validation={{ required: 'Поле обов’язкове для заповнення' }}
            />

            <AdminFormItem
              labelText={'Опис новини'}
              type={'textarea'}
              id={'description'}
              name={'description'}
              register={register}
              error={errors.description}
              validation={{ required: 'Поле обов’язкове для заповнення' }}
            />

            <div className="flex justify-end mt-8">
              <Button
                type={'submit'}
                styles={
                  'px-4 py-2 bg-gray-800  text-gray-300 rounded hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white'
                }
              >
                Опублікувати
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
