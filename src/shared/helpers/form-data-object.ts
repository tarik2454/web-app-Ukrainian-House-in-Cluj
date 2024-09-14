type FormDataObject = {
  [key: string]: string | string[];
};

const createFormDataObject = (formData: FormData): FormDataObject => {
  const obj: FormDataObject = {};

  formData.forEach((value, key) => {
    // Проверяем, существует ли уже этот ключ в объекте
    if (obj[key]) {
      // Если ключ существует, и значение является массивом, добавляем новое значение
      if (Array.isArray(obj[key])) {
        (obj[key] as string[]).push(value as string);
      } else {
        // Если значение не массив, преобразуем его в массив
        obj[key] = [obj[key] as string, value as string];
      }
    } else {
      // Если ключ не существует, добавляем его
      obj[key] = value as string;
    }
  });

  return obj;
};

export default createFormDataObject;
