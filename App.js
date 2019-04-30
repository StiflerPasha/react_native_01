import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import One from './src/Screen1'
import Two from './src/Screen2'
import Three from './src/Screen3'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {BLUE} from "./constants";
import {createDrawerNavigator} from "react-navigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DrawerNavigator = createDrawerNavigator({
		 Screen1: {
				screen: One,
				navigationOptions: {
					 drawerLabel: 'Stargate',
					 drawerIcon: ({tintColor}) => (
						 <MaterialIcons name='grade' size={24} style={{color: tintColor}}/>
					 )
				}
		 },
		 Screen2: {
				screen: Two,
				navigationOptions: {
					 drawerLabel: 'Batman',
					 drawerIcon: ({tintColor}) => (
						 <MaterialIcons name='favorite' size={24} style={{color: tintColor}}/>
					 )
				}
		 },
		 Screen3: {
				screen: Three,
				navigationOptions: {
					 drawerLabel: 'Spider-man',
					 drawerIcon: ({tintColor}) => (
						 <MaterialIcons name='pets' size={24} style={{color: tintColor}}/>
					 )
				}
		 }
	},
	{
		 initialRouteName: 'Screen1',
		 contentOptions: {
				activeTintColor: BLUE,
				itemsContainerStyle: {
					 marginVertical: 65
				},
		 },
	}
);

export default createAppContainer(DrawerNavigator)
/*
const TabNavigator = createBottomTabNavigator(
	{
		 Stargate: One,
		 Batman: Two,
		 Spiderman: Three
	},
	{
		 defaultNavigationOptions: ({navigation}) => ({
				tabBarIcon: ({focused, tintColor}) => {
					 const {routeName} = navigation.state;
					 let iconName;
					 if (routeName === 'Stargate') {
							iconName = focused ? 'ios-videocam' : 'ios-play'
					 } else if (routeName === 'Batman') {
							iconName = focused ? 'ios-videocam' : 'ios-play'
					 } else if (routeName === 'Spiderman') {
							iconName = focused ? 'ios-videocam' : 'ios-play'
					 }
					 return <Ionicons name={iconName} size={25} color={tintColor}/>
				}
		 }),
		 tabBarOptions: {
				activeTintColor: BLUE,
				inactiveTintColor: 'gray'
		 }
	},
);
export default createAppContainer(TabNavigator);*/
