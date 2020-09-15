import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
        const { person } = this.props.route.params;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: person.picture.large }}
                />
                
                <View style={styles.detailContainer}>
                    <View style={styles.line}>
                        <Text style={styles.cellLabel}>Email: </Text>
                        <Text style={styles.cellContent}>{ person.email }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cellLabel: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    cellContent: {
        fontSize: 18,
        paddingLeft: 5,
    },
});