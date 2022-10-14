import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Produtos from "./pages/Produtos";

const App = () => {
  return (
    <>
      {/* BrowserRouter: container de rotas (precisa envolver todos os componentes do APP) */}
      <BrowserRouter>
        <Cabecalho />
        {/* Switch: mecanismo para troca/alternância de rotas */}
        <Switch>
          {/* Route: configuração de cada rota (qual caminho, qual componente) */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos" component={Produtos} />
          {/* <Route path="/produtos">
            <Produtos />
          </Route> */}
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>
        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
