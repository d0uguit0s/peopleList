// import { StatusBar } from 'expo-status-bar';
// Todos os imports sem um caminho especifico seram procurados diretamente dentro do "node_modules"
import React from 'react';
import { Text, View } from 'react-native';

// Todos os imports com um caminho especifico seram procurados nos seus respectivos caminhos
import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
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
    axios
    .get('https://randomuser.me/api/?nat=br&results=10')
    .then(response => {
      const { results } = response.data;
      this.setState({
        people: results
      });
    })
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

  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        <PeopleList people={this.state.people} />
      </View>
    );
  }
}
