import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Produtos from "./pages/Produtos";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Home />
      <Produtos />
      <Servicos />
      <Rodape />
    </>
  );
};

export default App;
