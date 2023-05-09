import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import swal from "sweetalert";
import { AddIcCallOutlined, MarkEmailUnreadOutlined, Send } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/Firebase";

const gradoGrupo = [
  { id: 1, desc: "1A" },
  { id: 2, desc: "1B" },
  { id: 3, desc: "1C" },
  { id: 4, desc: "2A" },
  { id: 5, desc: "2B" },
  { id: 6, desc: "2C" },
  { id: 7, desc: "3A" },
  { id: 8, desc: "3B" },
  { id: 9, desc: "3C" },
];
export const ContactoApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, reset } = useForm();
  const registerCollection = collection(db, "mensajes");
  const [nombre, setNombre] = useState();
  const [alumno, setAlumno] = useState();
  const [grado, setGrado] = useState();
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
      alumno: alumno,
      grado: grado,
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
        <Typography align="center" gutterBottom variant="h4" color="primary">
          Escríbenos al email <MarkEmailUnreadOutlined fontSize="large"/> : agustinyanez@gmail.com
        </Typography>
        <Typography align="center" gutterBottom variant="h4" color="primary">
          llama al numero <AddIcCallOutlined fontSize="large"/> : 2222222222
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
          component="h2"
          color="secondary"
        >
          o bien compártenos tus datos y tu mensaje llenando el siguiente
          formulario:
        </Typography>
        <form onSubmit={store}>
          <TextField
            {...register("nombre", { required: true })}
            label="Nombre del padre o tutor"
            variant="outlined"
            fullWidth
            type="text"
            color="warning"
            required
            margin="normal"
            onChange={(eve) => setNombre(eve.target.value)}
          />
          <TextField
            {...register("alumno", { required: true })}
            label="Nombre del alumno"
            variant="outlined"
            fullWidth
            type="text"
            color="primary"
            required
            margin="normal"
            onChange={(eve) => setAlumno(eve.target.value)}
          />
          <FormControl sx={{ width: "15%" }} required>
            <InputLabel id="demo-label" color="success">
              Grado y Grupo
            </InputLabel>
            <Select
              name="Grado y Grupo"
              fullWidth
              label="Grado y Grupo"
              color="success"
              onChange={(eve) => setGrado(eve.target.value)}
            >
              {gradoGrupo &&
                gradoGrupo.map((grado) => (
                  <MenuItem key={grado.id} value={grado.desc}>
                    {grado.desc}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            color="error"
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
            color="secondary"
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
