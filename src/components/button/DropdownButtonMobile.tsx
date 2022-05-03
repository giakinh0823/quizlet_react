import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Link as MuiLink, Stack, Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
export interface DropdownButtonProps {
  list: any[];
}

export default function DropdownButtonMobile({ list }: DropdownButtonProps) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box width="100%">
      <Box
        onClick={handleClick}
        py={2.5}
        px={2}
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
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
          sx={{
            marginRight: 2,
            color: "text.primary",
            fontSize: 14,
            fontWeight: "bold",
            cursor: "pointer",
            hover: {
              color: "text.primary",
            },
          }}
        >
          Create
        </Typography>
        <KeyboardArrowDownIcon sx={{cursor: "pointer",}} />
      </Box>
      {open && (
        <Box sx={{ marginLeft: 2 }}>
          <Stack direction="column" alignItems="flex-start">
            {list.map((item, index) => (
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
        </Box>
      )}
    </Box>
  );
}
