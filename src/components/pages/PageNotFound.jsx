import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <Container>
        <div className="NotFound">
          <h1>Página no encontrar - ERROR 404</h1>

          <Button variant="contained" href="/">
            Regresar al Inicio
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFound;
