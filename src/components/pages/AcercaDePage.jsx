import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const AcercaDePage = () => {
  return (
    <div className="bloque">
      <div className="container text-center">
        <Container sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={3} sm={3} md={3}>
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
                    image="./src/assets/miss.jpeg"
                    alt="miss"
                    className="animate__animated animate__slideInDown"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className="animate__animated animate__slideInDown"
                    >
                      Nombre del/la Educador/a
                    </Typography>
                    <Typography className="animate__animated animate__slideInDown">
                      Descripción del/la Educador/a
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};
