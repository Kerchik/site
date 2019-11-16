import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from  './components/Header/HeaderContainer'
import Navbar from  './components/Navbar/Navbar'
import UsersContainer from  './components/Users/UsersContainer'
import Login from './components/Login/Login'
import {initializeApp} from './redux/appReducer'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import PreLoader from './components/common/preloader/PreLoader';
import store from './redux/reduxStore'
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
      if (!this.props.initialized) {
        return <PreLoader />
      }
      return (

            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                     render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" 
                     render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" 
                     render={() => <UsersContainer />}/>
                    <Route path="/login" 
                     render={() => <Login />}/>

                </div>
             </div>

      );
  }
};
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
    
const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
  </HashRouter>
}
export default SamuraiJSApp;
