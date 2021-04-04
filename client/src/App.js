
import Home from './Home'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import About from './About'
import HospitalAdministrative from './hospitalAdministrative'
import AdministrativeSignUp from './administrativeSignUp'
import Vaccination from './vaccination'
import Saifee from './saifeeHp'
import ApolloHp from './apolloHp'
import SaintgHp from './saintgHp'
import HospitalDetail from './hospitalDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div>
     <Router>
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/signin' component={Login}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/hospitalAdministrative' component={HospitalAdministrative}/>
          <Route exact path='/administrativeSignUp' component={AdministrativeSignUp}/>          
          <Route exact path='/vaccination' component={Vaccination}/>          
          <Route exact path='/saifeeHp' component={Saifee}/>          
          <Route exact path='/apolloHp' component={ApolloHp}/>          
          <Route exact path='/saintgHp' component={SaintgHp}/>          
          <Route exact path='/hospitalDetail' component={HospitalDetail}/>          
       </Switch>
     </Router>
   </div>
  );
}

export default App;
