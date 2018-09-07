import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
//pages
import Contact from './routes/Contact'
import About from './routes/About'
import Home from './routes/Home'

//component
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const history = createHistory()

history.listen(() => {
    console.log('test')
window.scrollTo(0,0)
});


class App extends Component {

    render() {
        console.log('hi');
        return (
            <Router history={history}>
                <div className="App">
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
