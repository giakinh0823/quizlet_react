import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { Box, useMediaQuery } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled, useTheme } from "@mui/material/styles";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: "all 150ms ease-in",
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.35),
  },
  marginLeft: 0,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "absolute",
  padding: theme.spacing(0.5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 2),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export interface IInputSearchProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default React.memo(function InputSearch({
  placeholder,
  onChange,
}: IInputSearchProps) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickIcon = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <Box>
      {!isMedium && !isOpen && (
        <Box
          sx={{
            cursor: "pointer",
            height: "fit-content",
            width: "fit-content",
            padding: theme.spacing(0.5),
            border: "1px solid #ccc",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={!isMedium ? handleClickIcon : () => {}}
        >
          <SearchIcon />
        </Box>
      )}
      {(isMedium || isOpen) && (
        <Box
          sx={
            !isMedium && isOpen
              ? {
                  position: "absolute",
                  width: "100%",
                  zIndex: 1000,
                  backgroundColor: "white",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
                  left: 0,
                  top: 0,
                  height: "100%",
                  padding: theme.spacing(2, 1),
                }
              : {}
          }
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              autoFocus
              onChange={handleChange}
              onBlur={!isMedium ? handleClickIcon : () => {}}
              placeholder={placeholder}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {!isMedium && (
            <Box
              onClick={() => setIsOpen(false)}
              pt={2}
              px={2}
              sx={{
                position: "absolute",
                right: 0,
                top: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CloseOutlinedIcon />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
});
