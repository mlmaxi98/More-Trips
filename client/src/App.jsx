import { Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import Country from './components/Country/Country'
import Crear from './components/Crear/Crear'
import {AppDiv} from './StyledApp'
function App() {
  return (
    <AppDiv>
      <Route path="/" component={Navbar}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/crear" component={Crear}></Route>
      <Route exact path="/pais/:id" component={Country}></Route>
      <Route path="/" component={Footer}></Route>

    </AppDiv>
  );
}

export default App;
