import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Login from './screens/login';
import Home from './screens/home';

const drawer = createDrawerNavigator({
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const stack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: drawer,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default stack;
