import { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { Logout, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export const AuthenticatedPage = () => {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState();
  const { register, reset } = useForm();
  const [image, setImage] = useState(null);

  const handleImageChange = (eve) => {
    setImage(eve.target.files[0]);
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    setIsLoading(true);
    reset();

    setIsLoading(false);
    swal({
      title: "Factura cargada",
      icon: "success",
      button: "Aceptar",
    });
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
            pt: 12,
            pb: 12,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              {...register("descripción", { required: true })}
              label="Descripción de la factura"
              variant="outlined"
              fullWidth
              value={description}
              type="text"
              color="secondary"
              required
              margin="normal"
              onChange={(eve) => setDescription(eve.target.value)}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              startIcon={<Send />}
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Subiendo..." : "Subir"}
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
