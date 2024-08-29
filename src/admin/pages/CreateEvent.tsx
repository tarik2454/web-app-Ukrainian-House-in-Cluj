import { useState } from 'react';
import PageTitle from '../../shared/components/PageTitle';

export default function CreateEvent() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const filePreparation = (file: File | null) => {
    if (!file) {
      setPreviewImg(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImg(reader.result as string);
      console.log(reader.result);
    };
  };

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    filePreparation(file);
  };

  return (
    <>
      <PageTitle
        styles={
          'font-inherit text-normal font-normal tracking-tight text-gray-900 pb-2 border-b-[1px] border-gray-300'
        }
      >
        Створити подію
      </PageTitle>

      <form>
        <div className="flex flex-col gap-4 mb-8">
          <label htmlFor="file" className="font-semibold">
            Виберіть зображення
          </label>
          <div className="relative w-[200px] h-[200px] bg-gray-200 border border-gray-300 rounded-md overflow-hidden">
            <input
              type="file"
              name="file"
              id="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleChangeImg}
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
