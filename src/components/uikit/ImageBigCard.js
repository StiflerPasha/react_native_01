import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
import {W} from '../../../constants'

const ImageBigCard = (props) => {
	 const {container, sub, cover} = styles;
	 const {image} = props.data;
	 return (
		 <View style={container}>
				<View style={sub}>
					 <Image style={cover} source={{uri: image.medium}}/>
				</View>
		 </View>
	 )
};

const styles = StyleSheet.create({
	 container: {
			paddingVertical: 20
	 },
	 sub: {
			shadowColor: '#000',
			borderRadius: 10,
			backgroundColor: 'white',
			shadowRadius: 8,
			shadowOffset: {width: 0, height: 5},
			shadowOpacity: 0.1,
			elevation: 20,
	 },
	 cover: {
			width: W / 1.67,
			height: W * 0.9,
			borderRadius: 10
	 }
});

export {ImageBigCard}