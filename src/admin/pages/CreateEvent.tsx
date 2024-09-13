import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PageTitle from '../../shared/components/PageTitle';
import Button from '../../shared/components/Button';
import AdminFormItem from '../components/AdminFormItem';
import Dropdown from '../components/Dropdown';

interface EventFormData {
  title: string;
  description: string;
  eventDate: {
    date: string;
    time: string;
    location: string;
  };
  registration: boolean;
  date: string;
  imageUrl?: string;
  file?: File | null;
  dropdownValue?: string;
}

type FormDataObject = {
  [key: string]: string | string[];
};

const createFormDataObject = (
  data: EventFormData,
  file: File | null
): FormDataObject => {
  const formData = new FormData();

  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('date', data.date);
  formData.append('eventDate[date]', data.eventDate.date);
  formData.append('eventDate[time]', data.eventDate.time);
  formData.append('eventDate[location]', data.eventDate.location);
  formData.append('registration', data.registration.toString());

  if (data.dropdownValue) {
    formData.append('dropdownValue', data.dropdownValue);
  }

  if (file) {
    formData.append('file', file);
  }

  const obj: FormDataObject = {};
  formData.forEach((value, key) => {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        (obj[key] as string[]).push(value as string);
      } else {
        obj[key] = [obj[key] as string, value as string];
      }
    } else {
      obj[key] = value as string;
    }
  });

  return obj;
};

export default function CreateEvent() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
      registration: true,
      date: '',
      dropdownValue: '',
    },
  });

  const filePreparation = (file: File | null) => {
    if (!file) {
      setPreviewImg(null);
      setSelectedFile(null);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setPreviewImg(null);
      setFileError('Розмір файлу повинен бути не більше 2 МБ');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
    };

    setFileError(null);
    setSelectedFile(file);
  };

  const handleChangeImg = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      filePreparation(file);
    }
  };

  const onSubmit: SubmitHandler<EventFormData> = data => {
    if (fileError || !selectedFile) {
      return;
    }

    const dataObject = createFormDataObject(data, selectedFile);

    console.log(dataObject);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setPreviewImg(null);
      setSelectedFile(null);
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <PageTitle styles="font-inherit text-normal font-normal tracking-tight text-gray-900 pb-2 border-b-[1px] border-gray-300">
        Створити подію
      </PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <AdminFormItem
            labelText="Назва події"
            type="text"
            id="title"
            name="title"
            register={register}
            error={errors.title}
            validation={{ required: 'Поле обов’язкове для заповнення' }}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex justify-center items-center w-full h-[380px] bg-black-100 bg-cover bg-center overflow-hidden relative">
              <input
                type="file"
                id="file"
                className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-20"
                accept="image/png, image/jpeg, image/jpg"
                {...register('file', {
                  required: 'Файл обов’язковий',
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
              labelText="Дата проведення"
              type="date"
              id="date"
              name="date"
              register={register}
              error={errors.date}
              validation={{ required: 'Поле обов’язкове для заповнення' }}
            />
            <AdminFormItem
              labelText="Опис події"
              type="textarea"
              id="description"
              name="description"
              register={register}
              error={errors.description}
              validation={{ required: 'Поле обов’язкове для заповнення' }}
            />
            <AdminFormItem
              labelText="Дата події"
              type="text"
              id="eventDateDate"
              name="eventDate.date"
              register={register}
            />
            <AdminFormItem
              labelText="Час події"
              type="text"
              id="eventDateTime"
              name="eventDate.time"
              register={register}
            />
            <AdminFormItem
              labelText="Локація події"
              type="text"
              id="eventDateLocation"
              name="eventDate.location"
              register={register}
            />
            <div className="grid grid-cols-2">
              <AdminFormItem
                labelText="Потрібна реєстрація"
                type="checkbox"
                id="registration"
                name="registration"
                register={register}
                defaultChecked={true}
                stylesField="mb-[2px]"
              />
              <Dropdown
                onChange={option =>
                  setValue('dropdownValue', option?.value ?? '')
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            styles="px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
          >
            Опублікувати
          </Button>
        </div>
      </form>
    </>
  );
}
