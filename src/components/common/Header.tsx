import { Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropdownButton from "../button/DropdownButton";
import InputSearch from "../inputField/InputSearch";
import { ROUTER_BUTTON_CREATE, ROUTER_LIST } from "./ROUTER_LIST";


export interface HeaderProps {}

export const Header = React.memo(function Header(props: HeaderProps) {


  const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        px={3}
        width="100%"
      >
        <Box>
          <MuiLink component={Link} to="/">
            <Box
              display="flex"
              alignItems="center"
              sx={{
                width: "fit-content",
              }}
            >
              <img
                src={logo}
                alt="icon"
                style={{ width: "fit-content", height: "1.3rem" }}
              />
            </Box>
          </MuiLink>
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {ROUTER_LIST.map((item, index) => (
              <Box key={index}>
                <MuiLink component={Link} to={item.path}>
                  <Box
                    py={2.5}
                    px={1}
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: "''",
                        position: "absolute",
                        bottom: 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80%",
                        height: "3px",
                        backgroundColor: "#a8b1ff",
                        borderRadius: "0.5rem",
                        opacity: 0,
                      },
                      "&:hover::after": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{
                        color: "text.primary",
                        fontSize: 14,
                        fontWeight: "bold",
                        hover: {
                          color: "text.primary",
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </MuiLink>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <DropdownButton list={ROUTER_BUTTON_CREATE} />
        </Box>
        <Box sx={{ marginLeft: "auto!important" }}>
          <InputSearch onChange={handleChange} placeholder="Study sets, textbooks,..."/>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.92rem",
                  color: "text.primary",
                  textTransform: "none",
                  padding: "3px 15px 2px 15px",
                }}
              >
                Log in
              </Button>
            </Box>
            <Box>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.92rem",
                  color: "text.primary",
                  backgroundColor: "#ffcd1f",
                  textTransform: "none",
                  padding: "3px 15px 2px 15px",
                  "&:hover": {
                    backgroundColor: "#ffcd1f",
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
)