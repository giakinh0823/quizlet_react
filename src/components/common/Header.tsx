import { Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import DropdownButton from "../button/DropdownButton";
import { ROUTER_BUTTON_CREATE, ROUTER_LIST } from "./ROUTER_LIST";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: "all 150ms ease-in",
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.35),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export interface HeaderProps {}

export function Header(props: HeaderProps) {
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Study sets, textbooks,..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
