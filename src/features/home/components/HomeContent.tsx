import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";

export interface IHomeContentProps {
  title: string;
  image: string;
  content: string;
  rotate?: boolean;
}

export default React.memo(function HomeContent({
  title,
  image,
  content,
  rotate,
}: IHomeContentProps) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      spacing={2}
      direction={
        isMedium ? (!rotate ? "row" : "row-reverse") : "column-reverse"
      }
    >
      <Grid
        item
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: {
                lg: "10px 80px",
                sm: "10px 60px"
            }
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 400, fontSize: 20 }}>
            {content}
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box sx={{ padding: {
            ld: "60px",
            sm: "40px",
        } }}>
          <img width="100%" src={image} alt={title} />
        </Box>
      </Grid>
    </Grid>
  );
});
