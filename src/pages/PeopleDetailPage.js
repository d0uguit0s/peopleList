import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
        const { person } = this.props.route.params;
        const { first } = person.name;

        return (
            <View style={styles.container}>
                <Image
                style={styles.avatar}
                source={{ uri: person.picture.large }}
            />
            <Text>{ first }</Text>
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
    }
});