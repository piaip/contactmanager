import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';
import EditContact from './component/contacts/EditContact';
import Header from './component/layout/Header';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function App() {
class App extends Component {
  render() {
    // const name = 'Larry';
    // const showHello = true;
    // const showMath = true;
    // const num1 = 40;
    // const num2 = 20;

    // let math;
    // if (showMath) {
    //   math = (
    //     <h4>
    //       {num1} + {num2} = {num1 + num2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              {/* <AddContact />
              <Contacts /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
