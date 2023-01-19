import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Colors from "../../constants/Colors";
import { useDispatch } from 'react-redux';
import * as appActions from '../../store/actions/app';

function Note(props) {
// Variables
    const dispatch = useDispatch();

// Fonctions
    const onPressHandler = () => {
        Alert.alert('Que souhaitez-vous faire ? ', undefined, [
            {
                text: 'Annuler',
                style: 'cancel',
            },
            {
                text: 'Supprimer',
                style: 'destructive',
                onPress: () => onDeleteHandler()
            }
        ])
    }
    const onDeleteHandler = () => {
        Alert.alert('Etes-vous sur de vouloir supprimer cette note', [
            {
                text: 'Annuler',
                style: 'cancdel',
            },
            {
                text: 'Supprimer',
                style: 'destructive',
                onPress: () => dispatch(appActions.deleteNote(props.item.id)),
            },
        ])
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onLongPress={onPressHandler}>
        <View style={styles.note}>
            <Text>{props.item.content}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    note: {
        backgroundColor: 'white',
        padding: 10,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    }

});

export default Note;