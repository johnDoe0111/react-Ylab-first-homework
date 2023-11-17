import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../validation";
import { Input } from "./form/Input";

export interface FormData {
  email: string;
  password: string;
}

const Authorization = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const fakeResponse = {
        status: "success",
        message: "Регистрация прошла успешно",
        data: data,
      };

      reset();
      console.log(fakeResponse);
    } catch (error) {
      console.error("Ошибка при регистрации", error);
    }
  };

  return (
    <div className="wrapper">
      <form className="decor" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <h3>Форма регистрации</h3>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Введите email"
          />
          <div className="error-wrapper">
            <p className="error-message">{errors.email?.message}</p>
          </div>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
          <div className="error-wrapper">
            <p className="error-message">{errors.password?.message}</p>
          </div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
