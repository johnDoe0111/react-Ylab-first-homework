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
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div>
      <input type={type} {...field} placeholder={placeholder} />
      <div>
        <p className="error-message">{error?.message}</p>
      </div>
    </div>
  );
};
