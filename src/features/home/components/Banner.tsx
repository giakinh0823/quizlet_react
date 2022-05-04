import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        backgroundImage: `url('https://quizlet-prod.cdn.prismic.io/quizlet-prod/fd9b8aeb-8e4c-4d96-a51d-9463339217bc_Hero+background+LO+home+final.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "765px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      px={2}
    >
      <Box
        px={4}
        py={8}
        sx={{
          maxWidth: "1200px",
          backgroundImage: `url('https://images.prismic.io/quizlet-prod/eca927aa-4f86-4e40-9565-8dd2fefb2cde_hero+image+shaded.png?auto=compress,format')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "85%",
          borderRadius: "20px",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgb(0 0 0 / 20%)",
            top: 0,
            left: 0,
          }}
        ></Box>
        <Grid
          container
          spacing={2}
          sx={{ zIndex: 1 }}
          direction={isMedium ? "row" : "column"}
        >
          <Grid item xs={6}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                component="h1"
                mb={2}
                sx={{ color: "white", fontWeight: "bold", maxWidth: "400px" }}
              >
                Learn it. Own it. Quizlet.
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "white", fontSize: 16 }}
              >
                With new expert explanations, an AI Learning Assistant and our
                ever-effective flashcards, get a suite of science-backed study
                tools at your fingertips.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: {
                  sm: "flex-start",
                  lg: "flex-end",
                },
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  padding: "16px 32px",
                  fontSize: 16,
                  borderRadius: "10px",
                }}
              >
                Get started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
