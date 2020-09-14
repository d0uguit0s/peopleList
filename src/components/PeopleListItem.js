import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Aqui o node irá procurar o arquivo "index.js" dentro do diretório "util"
import { capitalizeFirstLetter } from  '../util';

const PeopleListItem = props => {
    const { person } = props;
    const { title, first, last } = person.name;
    let titulo;
    if(title == 'Mr'){
        titulo = "Sr";
    }else{
        titulo = "Sra";
    }
    return(
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { `${capitalizeFirstLetter(titulo)}. ${first} ${last}` }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
    },
});

export default PeopleListItem;