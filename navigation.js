import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './screens/DetailsScreen';
import InitialScreen from './screens/InitialScreen';

const AppNavigator = createStackNavigator(
  {
    Initial: {
      screen: InitialScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Initial',
  }
);

export default createAppContainer(AppNavigator);
