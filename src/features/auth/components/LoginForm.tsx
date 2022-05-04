import { Box, Button } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/inputField/inputForm";

export interface ILoginFormProps {}

interface formLogin {
  username: string;
  password: string;
}

export default function LoginForm(props: ILoginFormProps) {
  const defaultValues: formLogin = {
    username: "",
    password: "",
  };
  const { handleSubmit, reset, control } = useForm({ defaultValues });

  const handleSubmitForm = (value: formLogin) => {
    console.log(value);
    reset();
  };

  return (
    <Box width="100%">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box mb={4}>
          <InputForm control={control} name="username" label="Username" />
        </Box>
        <Box mb={6}>
          <InputForm control={control} name="password" label="Password" />
        </Box>
        <Button type="submit" variant="contained" sx={{
            backgroundColor: "#3ccfcf",
            fontWeight: 500,
            textTransform: "none",
            fontSize: 20,
            padding: "10px 10px",
            "&:hover": {
                backgroundColor: "#229b9b",
            }
        }}>Login</Button>
      </form>
    </Box>
  );
}
