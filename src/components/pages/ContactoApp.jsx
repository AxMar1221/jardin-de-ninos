import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextField, Button, Card } from "@mui/material";
import swal from "sweetalert";
import { Send } from "@mui/icons-material";

export const ContactoApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Aquí puedes enviar el mensaje por medio de una API o por medio de un correo electrónico
    // Después de enviar el mensaje, se ejecutará la siguiente línea
    setIsLoading(false);
    reset();
    swal({
      title: "Mensaje enviado",
      text: "Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.",
      icon: "success",
      button: "Aceptar",
    });
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("nombre", { required: true })}
            label="Nombre"
            variant="outlined"
            fullWidth
            type="text"
            color="warning"
            required
            margin="normal"
          />
          <TextField
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            color="primary"
            required
            margin="normal"
          />
          <TextField
            {...register("telefono", { required: true, pattern: /^[0-9]*$/i })}
            label="Teléfono"
            variant="outlined"
            fullWidth
            type="number"
            color="error"
            required
            margin="normal"
          />
          <TextField
            {...register("mensaje")}
            label="Mensaje"
            variant="outlined"
            fullWidth
            required
            color="success"
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<Send />}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Card>
    </>
  );
};
