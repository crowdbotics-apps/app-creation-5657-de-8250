import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen79787Navigator from '../features/BlankScreen79787/navigator';
import BlankScreen69786Navigator from '../features/BlankScreen69786/navigator';
import UserProfile9555Navigator from '../features/UserProfile9555/navigator';
import BlankScreen29550Navigator from '../features/BlankScreen29550/navigator';
import BlankScreen19518Navigator from '../features/BlankScreen19518/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen79787: { screen: BlankScreen79787Navigator },
BlankScreen69786: { screen: BlankScreen69786Navigator },
UserProfile9555: { screen: UserProfile9555Navigator },
BlankScreen29550: { screen: BlankScreen29550Navigator },
BlankScreen19518: { screen: BlankScreen19518Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
