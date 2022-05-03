import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Link as MuiLink, useMediaQuery } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
export interface DropdownButtonProps {
  list: any[];
}

const DropdownButton = ({list}: DropdownButtonProps) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  
  useOutsideAlerter(dropdownRef, () => {setOpen(false)});

  const handleClick = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);


  return (
    <Box position="relative">
      {isMedium ? (
        <Button
          sx={{
            display: "flex",
            padding: isMedium ? "4px 15px 3px 15px" : "4px 5px 3px 5px",
            textTransform: "none",
            width: "fit-content",
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
      ) : (
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px 8px 3px 8px",
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <AddOutlinedIcon />
        </Box>
      )}

      <Box
        ref={dropdownRef}
        position="absolute"
        top="110%"
        left="0%"
        width="200px"
        display={open ? "block" : "none"}
        sx={{
          zIndex: 1000,
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
                    sx={{ minWidth: "fit-content", marginRight: "15px" }}
                  >
                    <item.icon sx={{ fontSize: 20 }} />
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

export default React.memo(DropdownButton);