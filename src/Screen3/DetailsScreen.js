import React, {PureComponent} from 'react'
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import {Header, ImageBigCard} from "../components/uikit";
import {STARGATE_HOME} from "../routes";

class DetailsScreen extends PureComponent {
	 render() {
			const {name, image, summary} = this.props.navigation.state.params;
			const {navigation} = this.props;
			const {container, sub, h1, h2} = styles;
			const data = {image};
			return (
				<View style={container}>
					 <Header
						 title={name}
						 onPress={() => navigation.goBack()}
						 leftIcon='ios-arrow-back'
						 leftColor='#fff'/>
					 <ScrollView>
							<View style={sub}>
								 <ImageBigCard data={data}/>
								 <Button
									 onPress={() => navigation.navigate(STARGATE_HOME)}
									 title="Learn more"
									 color="#841584"
									 accessibilityLabel="more for this button"
								 />
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
			backgroundColor: '#fff'
	 },
	 sub: {
			flex: 1,
			alignItems: 'center',
			marginBottom: 150,
			backgroundColor: '#fff',
	 },
	 h1: {
			paddingTop: 10,
			fontFamily: 'AvenirNext-DemiBold',
			fontSize: 30,
			padding: 15,
			textAlign: 'center',
	 },
	 h2: {
			paddingTop: 10,
			fontFamily: 'AvenirNext-DemiBold',
			fontSize: 15,
			paddingHorizontal: 15,
			textAlign: 'center',
			color: 'grey',
	 }
});
export default DetailsScreen