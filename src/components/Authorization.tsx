import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../validation";
import { Input } from "./form/Input";

export interface FormData {
  email: string;
  password: string;
}

const Authorization = () => {
  const { handleSubmit, control, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FormData) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 123,
          username: "mockUser",
          email: data.email,
        };

        resolve(userData);
      }, 2000);
    }).then((res) => {
      alert(JSON.stringify(res));
      setLoading(false);
      reset();
    });
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
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
          <button type="submit">
            {loading ? "Загрузка" : "Зарегистрироваться"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
