import React from 'react';
import { View, Text } from 'react-native'

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
    <View>
        <Text>Este é o nosso Header!</Text>
    </View>
);

// Exportando o código para ser importado no projeto todo
export default Header;