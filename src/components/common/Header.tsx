import { Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import DropdownButton from "../button/DropdownButton";
import { ROUTER_LIST, ROUTER_BUTTON_CREATE } from "./ROUTER_LIST";
import logo from '../../assets/logo.png';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Stack direction="row" alignItems="center" spacing={2} px={2}>
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
                style={{ width: "fit-content", height: "1.4rem" }}
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
                    py={2}
                    px={1}
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        backgroundColor: "#a8b1ff",
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
                        fontSize: 16,
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
      </Stack>
    </Box>
  );
}
