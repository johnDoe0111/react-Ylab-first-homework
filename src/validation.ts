import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Введите корректный email")
      .required("Email обязателен для заполнения"),
    password: yup
      .string()
      .required("Пароль обязателен для заполнения")
      .min(6, "Пароль должен содержать не менее 6 символов")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).+$/,
        "Пароль должен состоять только из латинских букв и содержать хотя бы одну цифру"
      ),
  })
  .required();
