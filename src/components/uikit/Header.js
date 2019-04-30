import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {ifIphoneX} from "react-native-iphone-x-helper";
import IonIcons from 'react-native-vector-icons/Ionicons'
import {w} from "../../../constants";

const Header = (props) => {
	 const {viewStyle, textStyle, leftButtonStyle} = styles;

	 return (
		 <View style={viewStyle}>
				<TouchableOpacity onPress={props.onPress}>
					 <IonIcons
						 name={props.leftIcon}
						 style={leftButtonStyle}
						 color={props.leftColor}/>
				</TouchableOpacity>
				<Text numberOfLines={1} ellipsizeMode={'tail'} style={textStyle}>{props.title}</Text>
		 </View>
	 )
};

const styles = StyleSheet.create({
	 viewStyle: {
	 	 flexDirection: 'row',
			backgroundColor: '#30d0fe',
			...ifIphoneX({
				 height: 116
			}, {
				 height: 90
			}),
			alignItems: 'center',
			justifyContent: 'flex-start',
			paddingLeft: 22,
			shadowColor: '#000',
			shadowOffset: {width: 0, height: 2},
			shadowOpacity: 0.2,
			elevation: 2,
			position: 'relative'
	 },
	 textStyle: {
			color: '#fff',
			fontSize: 28,
			fontFamily: 'AvenirNext-DemiBold',
			width: w - 40
	 },
	 leftButtonStyle: {
			fontSize: 40,
			paddingRight: 10
	 },
});

export {Header}