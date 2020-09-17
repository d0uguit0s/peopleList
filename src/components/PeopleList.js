import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { people, onPressItem } = props;

    // Modo antigo de renderizar a lista
    // const items = people.map((person, index) =>
    //     <PeopleListItem key={index} person={person} navigateToPeopleDetail={onPressItem} />
    // );

    return (
        // ScrollView - Ele renderiza tudo ao mesmo tempo, ou seja, mesmo que o componente não esteja dentro da tela, ele estará instanciado na memória, isto pode prejudicar a performance do app
        <FlatList
            style={styles.container}
            data={ people }
            renderItem={ ({ item }) => (
                <PeopleListItem
                    person={item}
                    navigateToPeopleDetail={onPressItem}
                />
            )}
            keyExtractor={ item => item.login.uuid }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    },
});

export default PeopleList;