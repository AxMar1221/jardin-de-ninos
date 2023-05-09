import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const InicioApp = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 5,
          width: "auto",
          padding: 5,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <CardMedia
          component="img"
          alt="Misión"
          height="220"
          image="src/assets/fachada.jpg"
          sx={{
            borderRadius: 5,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            color="primary"
          >
            Misión
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 5,
          width: "auto",
          padding: 5,
          marginBottom: 5,
        }}
      >
        <CardMedia
          component="img"
          alt="Visión"
          height="220"
          image="src/assets/fachada.jpg"
          sx={{
            borderRadius: 5,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            color="error"
          >
            Visión
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 5,
          width: "auto",
          padding: 5,
          marginBottom: 5,
        }}
      >
        <CardMedia
          component="img"
          alt="valores"
          height="220"
          image="src/assets/fachada.jpg"
          sx={{
            borderRadius: 5,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            color="secondary"
          >
            Valores
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
