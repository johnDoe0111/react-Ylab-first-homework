import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { FormData } from "../Authorization";

interface Props {
  control: Control<FormData>;
  name: keyof FormData;
  type: string;
  placeholder: string;
}

export const Input: FC<Props> = ({ control, name, type, placeholder }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <>
      <input type={type} {...field} placeholder={placeholder} />
    </>
  );
};
