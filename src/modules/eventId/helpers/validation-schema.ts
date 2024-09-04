import * as yup from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Призвище та ім'я обов'язкові для заповнення."),
  email: yup
    .string()
    .email('Введіть коректний email.')
    .required("Email обов'язковий для заповнення."),
  number: yup
    .string()
    .required("Номер телефону обов'язковий для заповнення.")
    .test('isValidPhoneNumber', 'Введіть коректний номер телефону.', value => {
      if (!value) return false;

      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber ? phoneNumber.isValid() : false;
    }),
  birthDate: yup
    .string()
    .required("Дата народження обов'язкова для заповнення."),
  telegram: yup
    .string()
    .required("Нікнейм в Telegram обов'язковий для заповнення."),
  textarea: yup
    .string()
    .max(200, 'Коментар не може перевищувати 200 символів.')
    .optional(),
});

export default validationSchema;
