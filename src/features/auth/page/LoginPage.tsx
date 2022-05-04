import { Grid, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box } from "@mui/system";
import * as React from "react";
import LoginForm from "../components/LoginForm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface ILoginPageProps {}

const LoginPage = (props: ILoginPageProps, ref: any) => {
  const [open, setOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    onOpen: () => {
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
            <Box sx={{
              width: {
                lg: "600px",
                md: "450px",
                sm: "100%",
                xs: "100%",
              }
            }}>
              <Stack direction="row" alignItems="flex-start" spacing={3} mb={3}>
                <Box
                  sx={{
                    cursor: "pointer",
                    color: "#999",
                  }}
                >
                  <Typography variant="h4" fontWeight="500">
                    Signup
                  </Typography>
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h4" fontWeight="500">
                    Login
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <LoginForm />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default React.forwardRef(LoginPage);
