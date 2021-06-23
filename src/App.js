import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import './styles/global.css'
import {BrowserRouter as Router, Redirect, Switch, Route, useLocation} from "react-router-dom"
import Layout from "./pages/DashBoard"
import Courses from "./components/Courses"


function App() {
  return (
    <>
    <Router>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Switch>
                <Route exact path={"/dashboard"}><courses/></Route>
                <Route path={"/setting"}><Login/></Route>
                <Route path={"/courses"}><Courses/></Route>
            </Switch>
        </Layout>
    </Router>
    </>
  );
}

export default App;
