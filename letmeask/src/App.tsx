import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";


// essa context é responsavel pelas credenciais de usuário
import { AuthContextProvider } from "./contexts/AuthContexts";

import GlobalStyle from  "./styles/global"
import light from "./styles/themes/light";


function App() {

  // Switch nunca deixa o react acessar duass rotas ao mesmo tempo

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={light}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new"  component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;