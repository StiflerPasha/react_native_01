import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {ifIphoneX} from "react-native-iphone-x-helper";
import {W, BLUE, WHITE} from "../../../constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchBar = ({
											iconRight,
											colorRight,
											onPressRight,
											onChangeText,
											placeholder,
											value,
											onBlur
									 }) => {
	 const {container, sub, iconRightStyle, inputStyle, searchStyle} = styles;

	 return (
		 <View style={container}>
				<View style={sub}>
					 <TextInput
						 style={inputStyle}
						 onChangeText={onChangeText}
						 placeholder={placeholder}
						 value={value}
						 onBlur={onBlur}
					 />
					 <TouchableOpacity onPress={onPressRight}>
							<View style={searchStyle}>
								 <MaterialCommunityIcons
									 name={iconRight}
									 style={[iconRightStyle, {color: colorRight}]}/>
							</View>
					 </TouchableOpacity>
				</View>
		 </View>
	 )
};

const styles = StyleSheet.create({
	 container: {
			flexDirection: 'row',
			justifyContent: 'center',
			shadowColor: '#000',
			shadowOffset: {width: 0, height: 2},
			shadowOpacity: 0.2,
			elevation: 2,
			paddingHorizontal: 20,
			backgroundColor: BLUE,
			position: 'relative',
			height: 90,
	 },
	 sub: {
			justifyContent: 'space-between',
			marginTop: 40,
			alignItems: 'center',
			flexDirection: 'row',
			width: W - 35,
			height: 40,
			backgroundColor: WHITE,
			borderRadius: 20,
	 },
	 inputStyle: {
			fontSize: 20,
			height: 35,
			width: W - 90,
			marginLeft: 15,
			backgroundColor: WHITE,
			color: '#000',
			paddingVertical: 5
	 },
	 searchStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#000',
			height: 40,
			width: 40,
			borderRadius: 20,
	 },
	 iconRightStyle: {
			fontSize: 30,
			marginTop: 2
	 }
});

export {SearchBar}