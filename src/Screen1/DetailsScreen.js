import React, {PureComponent} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Header, ImageBigCard} from "../components/uikit";
import {W, WHITE} from "../../constants";

class DetailsScreen extends PureComponent {

	 render() {
			const {show} = this.props.navigation.state.params;
			const {name, image, summary} = show;
			const {navigation} = this.props;
			const {container, sub, h1, h2} = styles;
			const data = {image};
			return (
				<View style={container}>
					 <Header
						 title={name}
						 onPressLeft={() => navigation.goBack()}
						 iconLeft='ios-arrow-back'
						 colorLeft='#fff'/>
					 <ScrollView>
							<View style={sub}>
								 <ImageBigCard data={data}/>
								 <Text style={h1}>{name.toUpperCase()}</Text>
								 <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
							</View>
					 </ScrollView>
				</View>
			)
	 }
}

const styles = StyleSheet.create({
	 container: {
			backgroundColor: WHITE
	 },
	 sub: {
			flex: 1,
			alignItems: 'center',
			marginBottom: 150,
			backgroundColor: WHITE
	 },
	 cover: {
			width: W,
			height: W * 1.5,
			borderRadius: 10
	 },
	 h1: {
			fontFamily: 'AvenirNext-DemiBold',
			fontSize: 30,
			padding: 15,
			textAlign: 'center'
	 },
	 h2: {
			fontFamily: 'AvenirNext-DemiBold',
			fontSize: 15,
			textAlign: 'center',
			color: 'grey',
			paddingHorizontal: 15
	 }
});
export default DetailsScreen