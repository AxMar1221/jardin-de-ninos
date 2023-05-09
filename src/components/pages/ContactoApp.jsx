import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextField, Button, Card } from "@mui/material";
import swal from "sweetalert";
import { Send } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/Firebase";

export const ContactoApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, reset } = useForm();
  const registerCollection = collection(db, "mensajes");
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [mensaje, setMensaje] = useState();

  const store = async (ev) => {
    ev.preventDefault();
    setIsLoading(true);

    reset();
    setIsLoading(false);
    await addDoc(registerCollection, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
    });
    swal({
      title: "Mensaje enviado",
      text: "Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.",
      icon: "success",
      button: "Aceptar",
    });
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
        <form onSubmit={store}>
          <TextField
            {...register("nombre", { required: true })}
            label="Nombre"
            variant="outlined"
            fullWidth
            type="text"
            color="warning"
            required
            margin="normal"
            onChange={(eve) => setNombre(eve.target.value)}
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
            onChange={(eve) => setEmail(eve.target.value)}
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
            onChange={(eve) => setTelefono(eve.target.value)}
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
            onChange={(eve) => setMensaje(eve.target.value)}
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
