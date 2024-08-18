import * as yup from 'yup';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Призвище та ім'я обов'язкові для заповнення."),
  email: yup
    .string()
    .email('Введіть коректний email.')
    .required("Email обов'язковий для заповнення."),
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
