import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Details from './Details/Details'
import Home from './Home'
// import Header from './Header';
// import history from '../history';

const App = () => {
    return (
        <div className=" ui container">
            <BrowserRouter>
                <div>
                    <Search />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:id" exact component={Details} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;