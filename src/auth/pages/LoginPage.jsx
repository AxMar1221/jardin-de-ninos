import { Button, Grid, TextField, Typography } from "@mui/material";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { email, password, onInputChange } = formData;

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(startLoginWithEmailPassword({ email, password }));
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
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
        <Typography variant="h5" sx={{ mb: 1 }}>
          Iniciar Sesión
        </Typography>
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="email"
                type="email"
                placeholder="Correo electronico"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="password"
                autoComplete="off"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container sx={{ mt: 1 }}>
              <Grid item xs={12}></Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  xs={{ color: "white" }}
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
