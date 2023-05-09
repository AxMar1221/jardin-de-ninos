import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export const PadresDeFamiliaApp = () => {
  return (
    <div className="bloque">
      <Box
        sx={{
          pt: 2,
          pb: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
            className="animate__animated animate__slideInDown"
          >
            Facturas asociación padres de familia
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph className="animate__animated animate__slideInDown">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 2 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9,
                    pt: "auto",
                    cursor: "pointer",
                  }}
                  image="src/assets/ejemplo-4.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nombre de la factura
                  </Typography>
                  <Typography>Descripción de la factura</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
