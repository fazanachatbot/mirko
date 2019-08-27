import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from "./Components/Navbar";
import ContentWrapper from './Components/ContentWrapper';
import Home from "./Components/Home";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Chat from './Components/Chat';

/**
 * krecem od mobilea (320 - 425px w),
 * pa idu manji tableti (426 - 767px w),
 * pa idu tableti (768 - 1023px w),
 * sve ostalo desktop (1024px+ w)
 */

const App = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path='/' render={() => <ContentWrapper><Home /></ContentWrapper>} />
                    <Route path='/about' render={() => <ContentWrapper><About /></ContentWrapper>} />
                    <Route path='/feedback' render={() => <ContentWrapper><Feedback /></ContentWrapper>} />
                </Switch>
            </Router>
            <Chat />
        </>
    );
};

export default App;
