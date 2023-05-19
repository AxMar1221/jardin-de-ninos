import { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { Logout, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const AuthenticatedPage = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar el envío de la imagen y descripción a tu servidor o hacer lo que desees con ellos
    console.log("Descripción:", description);
    console.log("Imagen:", image);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "60vh", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            pt: 2,
            pb: 2,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Descripción de la factura"
              value={description}
              onChange={handleDescriptionChange}
              fullWidth
              margin="normal"
              color="secondary"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <Button
                variant="contained"
                color="secondary"
                type="submit" 
                startIcon={<Send />}
                fullWidth
            >
              Subir factura
            </Button>
          </form>
        </Box>
        <Link to="/inicio" className="btn">
            <Button
                size="small"
                variant="contained"
                color="warning"
                startIcon={<Logout />}
            >
              Cerrar sesión
            </Button>
          </Link>
      </Grid>
    </Grid>
  );
};
