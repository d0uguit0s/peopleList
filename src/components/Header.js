import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

//Existem dois tipos de componentes, o Statefull e o Stateless/Funcional
// Statefull
// class Component extends React.Component {
//     render() {
//         return (
//             <View></View>
//         );
//     }
// }

// Stateless | Functional
const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

// StyleSheet
// StyleSheet.create ajuda a otimizar as correções de erros no estilo do app e a performance em geral
const style = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
    },
});

// Exportando o código para ser importado no projeto todo
export default Header;