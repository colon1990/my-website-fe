import React from 'react';


/* import css */
// import './../../assets/styles/mystyle.css'


/*  import image and mount as variable */
import image_girl from "./../../assets/images/img_girl.jpg";
import welcome_logo from "./../../assets/images/logo-welcome.jpg";

//  import LoginForm from "./LoginForm"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/men">Men</Link>
                            </li>
                            <li>
                                <Link to="/women">Women</Link>
                            </li>
                            {/*
                             <li>
                                <Link to="/unisex_accessories">Unisex-Accessories</Link>
                            </li>
                            <li>
                                <Link to="/watch-strap">Watch Strap</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Contact</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/promotion">Promotion</Link>
                            </li>
                            <li>
                                <Link to="/forum">Forum</Link>
                            </li> 
                            */}
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/men">
                            <Men />
                        </Route>
                        <Route path="/women">
                            <Women />
                        </Route>
                        {/* <Route path="/unisex_accessories">
                            <UnisexAccessories />
                        </Route>
                        <Route path="/watch_strap">
                            <WatchStrap />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/promotion">
                            <Promotion />
                        </Route>
                        <Route path="/forum">
                            <Forum />
                        </Route> */}

                    </Switch>
                </div>
            </Router>
        );
    }
}


function Home() {
    return <h2>Home of website</h2>;
}

function Products() {
    return (<h2>Products of Khoaleather</h2>);
}

function Men() {
    return <h2>Products for Men</h2>
}

function Women() {
    return <h2>Women</h2>
}

function UnisexAccessories() {
    return <h2> Unisex and accessories</h2>
}

function WatchStrap() {
    return <h2> Watch strap</h2>
}

function About() {
    return <h2>About Khoaleather shop</h2>
}

function Contact() {
    return <h2>Please Contact with ... </h2>
}

function Promotion() {
    return <h2> Accumulate, raised throgh rank</h2>
}

function Forum() {
    return <h2> Forum</h2>
}

// function Men() {
//     return <h2> Men</h2>
// }

