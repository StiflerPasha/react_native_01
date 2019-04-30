import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from "./DetailsScreen";
import {BATMAN_HOME, BATMAN_DETAILS} from "../routes";


const AppNavigator = createStackNavigator(
    {
        [BATMAN_HOME]: HomeScreen,
        [BATMAN_DETAILS]: DetailsScreen,
    },
    {
        headerMode: "none"
    },
);

export default createAppContainer(AppNavigator);