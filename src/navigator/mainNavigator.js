import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings192649Navigator from '../features/Settings192649/navigator';
import Settings192647Navigator from '../features/Settings192647/navigator';
import SignIn2192645Navigator from '../features/SignIn2192645/navigator';
import Settings192628Navigator from '../features/Settings192628/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings192649: { screen: Settings192649Navigator },
Settings192647: { screen: Settings192647Navigator },
SignIn2192645: { screen: SignIn2192645Navigator },
Settings192628: { screen: Settings192628Navigator },

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
