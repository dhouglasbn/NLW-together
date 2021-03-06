import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";


// essa context é responsavel pelas credenciais de usuário
import { AuthContextProvider } from "./contexts/AuthContexts";

import GlobalStyle from  "./styles/global"


function App() {

  // Switch nunca deixa o react acessar duass rotas ao mesmo tempo

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new"  component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;