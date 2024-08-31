import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PageTitle from '../../shared/components/PageTitle';

interface EventFormData {
  title: string;
  description: { start: string; base: string; end: string };
  eventDate: {
    date: string;
    time: string;
    location: string;
  };
  registration: boolean;
  date: string;
  imageUrl?: string;
  file?: FileList;
}

export default function CreateEvent() {
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
      description: { start: '', base: '', end: '' },
      eventDate: {
        date: '',
        time: '',
        location: '',
      },
      registration: true,
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
        Створити подію
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label htmlFor="title" className="block mb-1 font-semibold">
            Назва події
          </label>
          <textarea
            id="title"
            className="w-full border border-gray-300 rounded px-2 py-1"
            {...register('title', {
              required: 'Поле обов’язкове для заповнення',
            })}
          />
          {errors.title && (
            <span className="text-red-700">{errors.title.message}</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="mb-3">
            <label htmlFor="file" className="block mb-1 font-semibold">
              Виберіть зображення
            </label>
            <div className="relative w-full h-[300px] bg-gray-200 border border-gray-300 rounded-md overflow-hidden">
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
              {previewImg && (
                <img
                  src={previewImg}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {errors.file && !fileError && (
              <span className="text-red-700">{errors.file.message}</span>
            )}
            {fileError && <span className="text-red-700">{fileError}</span>}
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="date" className="block mb-1 font-semibold">
                Дата проведення
              </label>
              <input
                id="date"
                type="date"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('date', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.date && (
                <span className="text-red-700">{errors.date.message}</span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="descriptionStart"
                className="block mb-1 font-semibold"
              >
                Початок опису
              </label>
              <textarea
                id="descriptionStart"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('description.start', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.description?.start && (
                <span className="text-red-700">
                  {errors.description.start.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="descriptionBase"
                className="block mb-1 font-semibold"
              >
                Основний опис
              </label>
              <textarea
                id="descriptionBase"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('description.base', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.description?.base && (
                <span className="text-red-700">
                  {errors.description.base.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="descriptionEnd"
                className="block mb-1 font-semibold"
              >
                Заключний опис
              </label>
              <textarea
                id="descriptionEnd"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('description.end', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.description?.end && (
                <span className="text-red-700">
                  {errors.description.end.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="eventDateDate"
                className="block mb-1 font-semibold"
              >
                Дата події
              </label>
              <input
                id="eventDateDate"
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('eventDate.date', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.eventDate?.date && (
                <span className="text-red-700">
                  {errors.eventDate.date.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="eventDateTime"
                className="block mb-1 font-semibold"
              >
                Час події
              </label>
              <input
                id="eventDateTime"
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('eventDate.time', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.eventDate?.time && (
                <span className="text-red-700">
                  {errors.eventDate.time.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="eventDateLocation"
                className="block mb-1 font-semibold"
              >
                Локація події
              </label>
              <input
                id="eventLocation"
                type="text"
                className="w-full border border-gray-300 rounded px-2 py-1"
                {...register('eventDate.location', {
                  required: 'Поле обов’язкове для заповнення',
                })}
              />
              {errors.eventDate?.location && (
                <span className="text-red-700">
                  {errors.eventDate.location.message}
                </span>
              )}
            </div>

            <div className="flex gap-3 mb-3">
              <label htmlFor="registration" className="block font-semibold">
                Потрібна реєстрація
              </label>
              <input
                type="checkbox"
                id="registration"
                {...register('registration')}
                defaultChecked={true}
                className="mt-[2px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Відправити
          </button>
        </div>
      </form>
    </>
  );
}
