import { useEffect, useState } from 'react';
import PageTitle from '../../shared/components/PageTitle';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateEventFormData {
  file?: FileList;
  firstName?: string;
}

export default function CreateEvent() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<CreateEventFormData>();

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
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
    };
  };

  const handleChangeImg = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files ? event.target.files[0] : null;
    filePreparation(file);
  };

  const onSubmit: SubmitHandler<CreateEventFormData> = data => {
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
        Створити подію
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8 mb-8">
          <div>
            <label htmlFor="file" className="block mb-2 font-semibold">
              Виберіть зображення
            </label>
            <div className="relative w-[200px] h-[200px] bg-gray-200 border border-gray-300 rounded-md overflow-hidden mb-8">
              <input
                type="file"
                id="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/png, image/jpeg, image/jpg"
                {...register('file', {
                  required: 'Файл обов’язковий',
                  onChange: handleChangeImg,
                })}
              />
              {previewImg ? (
                <img
                  src={previewImg}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500">
                  No image selected
                </div>
              )}
            </div>
            {!fileError && errors.file && (
              <span className="mt-[2px] text-red-700 text-sm">
                {errors.file.message}
              </span>
            )}

            {fileError && (
              <span className="mt-[2px] text-red-700 text-sm">{fileError}</span>
            )}
          </div>

          <div className="mb-8">
            <label htmlFor="firstName" className="block mb-2 font-semibold">
              Введіть ваше ім'я
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border border-gray-300 rounded px-2 py-1"
              {...register('firstName', {
                required: 'Поле обов’язкове для заповнення',
              })}
            />

            {errors.firstName && (
              <span className="mt-[2px] text-red-700 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Відправити
        </button>
      </form>
    </>
  );
}
