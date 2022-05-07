import { Avatar, Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

export interface IDropdownButtonAvatarProps {
  list: any;
}

const DropdownButtonAvatar = ({ list }: IDropdownButtonAvatarProps) => {
  const [open, setOpen] = React.useState(false);
  const subMenuRef = React.useRef(null);

  const handleClick = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  useOutsideAlerter(subMenuRef, handleClick);

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>
      {open && (
        <Box
          ref={subMenuRef}
          sx={{
            position: "absolute",
            top: "120%",
            right: 0,
            zIndex: 1000,
            minWidth: "160px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            overflow: "hidden",
          }}
        >
          <MuiLink
            component={Link}
            to={"/profile"}
            sx={{
              display: "block",
              color: "text.primary",
              "&:hover": {
                color: "black",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                padding: "8px 20px",
              }}
            >
              <Box>
                <Avatar
                  alt="Hà Gia Kính"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </Box>
              <Box
                sx={{
                  padding: "4px 0",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, fontSize: 14 }}
                >
                  giakinh0823
                </Typography>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    width: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    giakinh2000@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </MuiLink>
          <Box sx={{ borderBottom: "1px solid #eee" }}></Box>
          <Box>
            {list.map((group: any) => {
              return (
                <>
                  {group.items.map((item: any, index: number) => (
                    <Box key={index}>
                      <MuiLink
                        component={Link}
                        to={item.path}
                        sx={{
                          display: "block",
                          color: "text.primary",
                          "&:hover": {
                            color: "black",
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            padding: "10px 24px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: "bold",
                              fontSize: 14,
                              color: "text.primary",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </MuiLink>
                    </Box>
                  ))}
                  <Box sx={{ borderBottom: "1px solid #eee" }}></Box>
                </>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(DropdownButtonAvatar);
