import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Header, ImageCard, Layout, SearchBar} from "../components/uikit";
import {STARGATE_DETAILS} from "../routes";
import {connect} from 'react-redux';
import {searchChanged, getMovies} from "../actions";

class HomeScreen extends Component {
	 state = {
			title: 'STARGATE',
			visibleSearchBar: false,
	 };

	 _onChangeText = text => {
			this.props.searchChanged(text);
			this.props.getMovies(text);
	 };


	 render() {
			const {title, visibleSearchBar} = this.state;
			const {navigation, movie, data} = this.props;

			const cards = data.map(item => (
				<ImageCard
					data={item.show}
					key={item.show.id}
					onPress={() => navigation.navigate(STARGATE_DETAILS,
						({show: item.show}))}/>
			));

			return (
				<View>
					 {visibleSearchBar ?
						 <SearchBar
							 colorRight='#fff'
							 iconRight='magnify'
							 placeholder='Search...'
							 onChangeText={this._onChangeText}
							 value={movie}
							 onPressRight={() => this.setState({visibleSearchBar: false})}
							 onBlur={() => this.setState({visibleSearchBar: true})}/> :
						 <Header
							 title={title}
							 colorRight='#fff'
							 iconRight='magnify'
							 onPressRight={() => this.setState({visibleSearchBar: true})}/>
					 }
					 <ScrollView>
							<Layout>
								 {cards}
							</Layout>
					 </ScrollView>
				</View>
			)
	 }
}

const mapStateToProps = state => {
	 return {
			movie: state.search.movie,
			data: state.search.data
	 }
};

export default connect(mapStateToProps, {searchChanged, getMovies})(HomeScreen);