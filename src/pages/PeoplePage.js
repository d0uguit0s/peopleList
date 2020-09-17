// import { StatusBar } from 'expo-status-bar';
// Todos os imports sem um caminho especifico seram procurados diretamente dentro do "node_modules"
import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

// Todos os imports com um caminho especifico seram procurados nos seus respectivos caminhos
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			loading: false,
			error: false,
		};
	} 

	componentDidMount() {
		// Promises
		/* 
		Estados das promises:
		resolved - Foi resolvida, ou seja, conseguiu realizar sua função
		rejected - Foi rejeitada, ou seja, não conseguiu realizar sua função
		pending - Está em espera, ou seja, ainda não confirmou se conseguiu realizar sua função
		*/
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get('https://randomuser.me/api/?nat=br&results=15')
				// then = resolved
				.then(response => {
					const { results } = response.data;
					this.setState({
						people: results,
						loading: false,
				});
			// catch = rejected
			}).catch(error => {
				this.setState({
					loading: false,
					error: true,
				})
			})
		}, 1500)
	}

	// renderList() {
	//   const names = [
	//     'Eddie Van Halen',
	//     'Jimi Hendrix',
	//     'Chimbinha',
	//     'Steve Vai'
	//   ];

	//   const textElements = names.map(name => {
	//     return <Text key={name}>{name}</Text>
	//   });
	// }

	renderLoading() {
		// Renderização condicional
		if(this.state.loading)
			return <ActivityIndicator size='large' color='#6ca2f7' />;
		return null;
	}

	render() {
		return (
		<View style={styles.container}>
			{/* 
				Modo mais longo de se fazer renderização condicional
				{ this.renderLoading() } 
			*/}
			{
				// Modo mais curto e prático de se fazer renderização condicional
				this.state.loading
					? <ActivityIndicator size='large' color='#6ca2f7' />
					: this.state.error
						? <Text style={styles.error}>Ops... algo deu errado =[</Text>
						: <PeopleList
							people={this.state.people}
							onPressItem={pageParams => {
							this.props.navigation.navigate('PeopleDetail', pageParams);
							}}
						/>
			}
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	error: {
		color: '#f00',
		fontWeight: 'bold',
		fontSize: 20,
		alignSelf: 'center',
	}
})