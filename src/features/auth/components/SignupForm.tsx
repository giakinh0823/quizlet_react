import { Box, Button } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../../../components/inputField/inputForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignupFormProps {}

interface formSignup {
  username: string;
  password: string;
  email: string;
  phone: string;
  fullname: string;
  birthday: Date;
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email("Please input an email!").required(),
    phone: yup.string().required(),
    fullname: yup.string().required(),
  })
  .required();

export default function SignupForm(props: ISignupFormProps) {
  const defaultValues: formSignup = {
    username: "",
    password: "",
    email: "",
    phone: "",
    fullname: "",
    birthday: new Date(),
  };
  const { handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value: formSignup) => {
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
        <Box mb={4}>
          <InputForm control={control} name="password" label="Password" />
        </Box>
        <Box mb={4}>
          <InputForm control={control} name="email" label="Email" />
        </Box>
        <Box mb={4}>
          <InputForm control={control} name="phone" label="Phone" />
        </Box>
        <Box mb={6}>
          <InputForm control={control} name="fullname" label="Fullname" />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#3ccfcf",
            fontWeight: 500,
            textTransform: "none",
            fontSize: 20,
            padding: "10px 10px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#3ccfcf",
              boxShadow: "none",
            },
          }}
        >
          Signup
        </Button>
      </form>
    </Box>
  );
}
