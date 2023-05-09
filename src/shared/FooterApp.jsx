import { FmdGoodOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="h5" color="white" align="center">
      {"Copyright © "}
      <Link underline="hover" color="inherit" href="https://github.com/AxMar1221">
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
        <FmdGoodOutlined fontSize="large" />
        <Link underline="hover" color="inherit" href="https://goo.gl/maps/ia3Xb9UtkmT4DGeX6?coh=178571&entry=tt">
          Río Tuxpan 612*B, Cnel. Miguel Auza, 72570 Puebla, Pue.
        </Link>
      </Typography>
      <Copyright />
    </Box>
  );
};
