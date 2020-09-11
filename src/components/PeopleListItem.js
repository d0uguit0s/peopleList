import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PeopleListItem = props => {
    const { person } = props;
    const { first, last } = person.name;
    return(
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { first }
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