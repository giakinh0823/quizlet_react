import {
  Button,
  Link as MuiLink,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropdownButton from "../button/DropdownButton";
import InputSearch from "../inputField/InputSearch";
import { ROUTER_BUTTON_CREATE, ROUTER_LIST } from "./ROUTER_LIST";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import DropdownButtonMobile from "../button/DropdownButtonMobile";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface HeaderProps {}

export const Header = React.memo(function Header(props: HeaderProps) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleOpenMenu = React.useCallback(function handleOpenMenu() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }, []);

  const handleOffMenu = React.useCallback(function handleOpenMenu() {
    setIsOpenMenu(() => false);
  }, []);

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
        spacing={isMedium ? 2 : 0}
        px={3}
        width="100%"
      >
        {!isMedium && (
          <>
            <Box
              onClick={handleOpenMenu}
              py={1.3}
              px={1}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuOpenOutlinedIcon
                sx={{ color: "primary.main", fontSize: 40 }}
              />
            </Box>
            {isOpenMenu && (
              <Box
                sx={{
                  position: "fixed",
                  backgroundColor: "white",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  zIndex: 10000,
                }}
              >
                <Box
                  onClick={handleOffMenu}
                  pt={2}
                  px={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CloseOutlinedIcon sx={{ cursor: "pointer" }} />
                </Box>
                <Stack direction="column" alignItems="flex-start">
                  {ROUTER_LIST.map((item, index) => (
                    <Box key={index} width="100%">
                      <MuiLink
                        component={Link}
                        to={item.path}
                        sx={{ display: "block", width: "100%" }}
                      >
                        <Box
                          py={2.5}
                          px={2}
                          sx={{
                            position: "relative",
                            width: "100%",
                            "&::after": {
                              content: "''",
                              position: "absolute",
                              top: "50%",
                              left: 0,
                              width: "4px",
                              height: "80%",
                              transform: "translateY(-50%)",
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
                            width="100%"
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
                <DropdownButtonMobile list={ROUTER_BUTTON_CREATE} />
              </Box>
            )}
          </>
        )}
        {isMedium && (
          <>
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
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      "&:hover > a": {
                        opacity: "1!important",
                      }
                    }}
                  >
                    <MuiLink component={Link} to={item.path}>
                      <Box
                        py={2.5}
                        px={1}
                        sx={{
                          position: "relative",
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
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => {
                        return {
                          display: "block",
                          opacity: isActive ? 1 : 0,
                        };
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 2,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "80%",
                          height: "3px",
                          backgroundColor: "#a8b1ff",
                          borderRadius: "0.5rem",
                          opacity: 1,
                        }}
                      ></Box>
                    </NavLink>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box>
              <DropdownButton list={ROUTER_BUTTON_CREATE} />
            </Box>
          </>
        )}
        <Box sx={{ marginLeft: "auto!important" }}>
          <InputSearch
            onChange={handleChange}
            placeholder="Study sets, textbooks,..."
          />
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
});
