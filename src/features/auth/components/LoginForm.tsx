import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppDispatch } from "../../../app/hook";
import InputForm from "../../../components/inputField/inputForm";
import { authActions } from "../authSlice";

export interface ILoginFormProps {}

interface formLogin {
  username: string;
  password: string;
}

const defaultValues: formLogin = {
  username: "",
  password: "",
};

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function LoginForm(props: ILoginFormProps) {
  const dispatch = useAppDispatch();

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value: formLogin) => {
    dispatch(authActions.login(value));
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
          Login
        </Button>
      </form>
    </Box>
  );
}
