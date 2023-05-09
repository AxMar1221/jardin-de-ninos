import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const AcercaDeApp = () => {
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
                  image="src/assets/miss.jpeg"
                  alt="miss"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nombre del/la Educador/a
                  </Typography>
                  <Typography>Descripción del/la Educador/a</Typography>
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
