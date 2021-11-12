import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "components/Navbar";

import Home from "pages/Home";
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/products">
                    <Catalog />
                </Route>

                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;