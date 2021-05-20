
import { React, Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from '../About';
import Home from '../Home';
import Contact from '../Contact';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            hello: ' ',
        }
    }

    render() {
        return (

            <div>

                <Router>
                   <section className='bg-dark'>
                       <div className="container">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Navbar</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <Link aria-current="page" class="nav-link active" to="/">Home</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link aria-current="page" class="nav-link active" to="/about">about</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link aria-current="page" class="nav-link active" to="/contact">contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                       </div>
                   </section>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                    
                </Router>
            </div>

        )
    }

}