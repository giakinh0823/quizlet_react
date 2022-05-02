import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as MuiLink, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export interface DropdownButtonProps {
  list: any[];
}

export default function DropdownButton({ list }: DropdownButtonProps) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box position="relative">
      <Button
        sx={{
          padding: "5px 15px 3px 15px",
          textTransform: "none",
          "&:active": {
            margin: "0 -.1rem",
          },
        }}
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        Create
      </Button>
      <Box
        position="absolute"
        top="110%"
        left="0%"
        width="200px"
        display={open ? "block" : "none"}
        sx={{
          backgroundColor: "white",
          borderRadius: "0.6rem",
          boxShadow: "0px 8px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <List>
          {list.map((item, index) => (
            <MuiLink key={index} component={Link} to={item.path}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    padding: "10px 20px",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ minWidth: "fit-content", marginRight: "10px" }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Study set"
                    sx={{
                      "& > span, p": {
                        fontWeight: "500",
                        "&:hover": {
                          color: "text.primary",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </MuiLink>
          ))}
        </List>
      </Box>
    </Box>
  );
}
