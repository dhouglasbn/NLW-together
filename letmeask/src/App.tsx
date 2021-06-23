import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";


// essa context é responsavel pelas credenciais de usuário
import { AuthContextProvider } from "./contexts/AuthContexts";

function App() {

  // Switch nunca deixa o react acessar duass rotas ao mesmo tempo

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new"  component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;