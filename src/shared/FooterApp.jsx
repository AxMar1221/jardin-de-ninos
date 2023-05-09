import { Box, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="h5" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/AxMar1221">
        Jardín de niños Lic. Agustin Yañez
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const FooterApp = () => {
  return (
    <Box sx={{ color: "white", p: 6 }} component="footer">
      <Typography variant="h6" align="center" color="white" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
};
