import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route, Redirect} from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/logout'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {


  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {

    let routes = (
      <Layout>
          <Route path='/auth' component={Auth}></Route>
          <Route path='/' exact component={BurgerBuilder}></Route>
          <Redirect to ='/'></Redirect>
        </Layout>
    )

    if (this.props.isAuthenticated)
 {
   routes = (
    <Layout>
    <Route path='/orders' component={Orders}></Route>
    <Route path='/checkout' component={Checkout}></Route>
    <Route path='/logout' component={Logout}></Route>
    <Route path='/' exact component={BurgerBuilder}></Route>
    <Redirect to ='/'></Redirect>
  </Layout>
   )
 }
    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
