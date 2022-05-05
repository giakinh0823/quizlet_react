import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box } from "@mui/system";
import * as React from "react";
import LoginForm from "../components/LoginForm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SignupForm from "../components/SignupForm";
import { useAppSelector } from "../../../app/hook";
import { selectIsLoading } from "../authSlice";

export interface IAuthPageProps {}

const AuthPage = (props: IAuthPageProps, ref: any) => {
  const isLoading = useAppSelector(selectIsLoading);
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);

  React.useImperativeHandle(ref, () => ({
    onOpenLogin: () => {
      setIsLogin(true);
      handleClickOpen();
    },
    onOpenSignup: () => {
      setIsLogin(false);
      handleClickOpen();
    },
    onClose: () => {
      handleClose();
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} fullScreen>
      {isLoading && (
        <Box sx={{ width: "100%", position: "absolute", top: 0, left: 0 }}>
          <LinearProgress />
        </Box>
      )}

      <Box
        onClick={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          right: 15,
          top: 15,
        }}
      >
        <CloseOutlinedIcon sx={{ cursor: "pointer" }} />
      </Box>
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        <Grid container height="100%">
          <Grid
            item
            xs={0}
            md={6}
            height="100%"
            sx={{
              padding: 2,
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundImage:
                  "url('https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "100%",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  color: "#3b4c9b",
                  maxWidth: "400px",
                }}
              >
                Smash sets in your sweats.
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="white">
                Quizlet
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                lg: 8,
                md: 6,
                xs: 5,
              },
            }}
          >
            <Box
              sx={{
                width: {
                  lg: "600px",
                  md: "450px",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <Stack direction="row" alignItems="flex-start" spacing={3} mb={3}>
                <Box
                  onClick={() => {
                    setIsLogin(false);
                  }}
                  sx={{
                    cursor: "pointer",
                    color: isLogin ? "#999" : undefined,
                  }}
                >
                  <Typography variant="h4" fontWeight="500">
                    Signup
                  </Typography>
                </Box>
                <Box
                  onClick={() => {
                    setIsLogin(true);
                  }}
                  sx={{
                    cursor: "pointer",
                    color: !isLogin ? "#999" : undefined,
                  }}
                >
                  <Typography variant="h4" fontWeight="500">
                    Login
                  </Typography>
                </Box>
              </Stack>
              <Box>{isLogin ? <LoginForm /> : <SignupForm />}</Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default React.forwardRef(AuthPage);
