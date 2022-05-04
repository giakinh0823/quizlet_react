import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

export interface IInputFormProps {
  control: Control<any, any>;
  name: string;
  label?: string;
}

export default function InputForm({ control, name, label }: IInputFormProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <TextField
          fullWidth={true}
          label={label}
          value={value}
          variant="standard"
          onBlur={onBlur}
          onChange={onChange}
          inputRef={ref}
          color="secondary"
        />
      )}
    />
  );
}
