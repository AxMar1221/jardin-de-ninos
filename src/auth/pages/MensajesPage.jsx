
import { Delete, Logout } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { collection, deleteDoc, doc, getDocs, } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../firebase/Firebase";
// import { db } from "../../../../Jardin de niños/src/firebaseConfig/Firebase";

export const MensajesPage = () => {
  const [mensajes, setMensajes] = useState([]);
  const [tableMensajes, setTableMensajes] = useState([]);
  const mensajesCollection = collection(db, "mensajes")

  const getMensajes = async () => {
    const data = await getDocs(mensajesCollection);
    console.log(data.docs)

    setMensajes(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    setTableMensajes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  const deleteMensaje = async (id) => {
    const mensajeDoc = doc(db, "mensajes", id);
    await deleteDoc(mensajeDoc);
    getMensajes
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar registro?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3885d5",
      confirmButtonText: "si eliminar registro",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMensaje(id);
        Swal.fire("Deleted!", "Mensaje eliminado", "success");
      }
    });
  };

      // ---!!!BUSQUEDA!!!---
      const [search, setSearch] = useState('');

      const searchTerm = (e) => {
        setSearch(e.target.vale)
        console.log(e.target.value)
        filter((e.target.value))
      }
  
      const filter = (searchTerm) => {
        let searchResult = tableMensajes.filter(( elem ) => {
          if ( elem.nombre.toString().toLowerCase().includes(searchTerm.toLowerCase())
          || elem.alumno.toString().toLowerCase().includes(searchTerm.toLowerCase())
          || elem.grado.toString().toLowerCase().includes(searchTerm.toLowerCase())
          || elem.email.toString().toLowerCase().includes(searchTerm.toLowerCase())
          || elem.telefono.toString().toLowerCase().includes(searchTerm.toLowerCase())
          ){
            return elem;
          }
        });
        setMensajes(searchResult);
      }
   
  
    useEffect(() => {
      getMensajes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const tab = <>&nbsp;&nbsp;</>;

  return (
    <div className="bloque">
      <Grid container>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <FormControl className="d-flex mb-2 col-4" role="search">
            <TextField
              label="Buscar mensaje"
              type="text"
              name="search"
              margin="dense"
              value={search}
              variant="outlined"
              color="primary"
              onChange={searchTerm}
            />
          </FormControl>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre del padre o tutor</TableCell>
                <TableCell align="left">Nombre del alumno</TableCell>
                <TableCell align="left">Grado y Grupo</TableCell>
                <TableCell align="center">E-mail</TableCell>
                <TableCell align="center">Teléfono</TableCell>
                <TableCell align="center">Mensaje</TableCell>
                <TableCell align="center">{tab}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mensajes.map((mensajes) => (
                <TableRow
                  key={mensajes.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{mensajes.nombre}</TableCell>
                  <TableCell align="left">{mensajes.alumno}</TableCell>
                  <TableCell align="center">{mensajes.grado}</TableCell>
                  <TableCell align="center">{mensajes.email}</TableCell>
                  <TableCell align="center">{mensajes.telefono}</TableCell>
                  <TableCell align="justify">{mensajes.mensaje}</TableCell>

                  <TableCell>
                    <Link className="btn">
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => {
                          confirmDelete(mensajes.id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
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
    </div>
  );
};
