import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

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
            <Image style={styles.avatar} source={{ uri: person.picture.thumbnail }} />
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
    avatar: {
        // O aspectRatio mantém as proporções originais da imagem, ou seja, uma img de 40X40 se for aumentada para 50 de largura ficará 50X50
        aspectRatio: 1,
        width: 40
    },
});

export default PeopleListItem;