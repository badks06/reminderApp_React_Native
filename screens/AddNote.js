import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, TextInput} from 'react-native';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller} from 'react-hook-form';
import { useDispatch} from 'react-redux';
import * as appActions from '../store/actions/app';

function AddNote(props) {
    // Variables
    const { control, handleSubmit, formState: {errors}} = useForm();
    const project = props.route.params.project;
    const dispatch = useDispatch();

    // Fonctions
    const onSubmit = data => {
        const note = {
            content: data.note,
            creationDate: new Date(),
            projectId: project.id,
        }
        dispatch(appActions.addNote(note));
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.title}>Ajouter une note</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.projectName}>{project.name}</Text>
            <Controller control={control} render={({field: {value, onChange}}) => (
                <TextInput placeholder='Tapez quelque chose...' value={value} onChangeText={value => onChange(value)} multiligne={true} style={styles.input}/>
            )}
            name="note"
            rules={{
                required: true,
            }}
            />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.submit} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submitText}>Ajouter</Text>
                <Ionicons name='arrow-forward'size={23} color='white' />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.close} onPress={() => props.navigation.goBack()}>
                <Ionicons name='close' siz={23} color="white" />
            </TouchableOpacity>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryFaded,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: Platform.OS === 'android' ? 50 : 30,
        alignSelf: 'center',
    },
    close : {
        backgroundColor: Colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50,
    },
    inputContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    input: {
        maxHeight: 150,
        fontSize: 16,

    },
    submit: {
        backgroundColor: Colors.primary,
        padding: 10,
        width: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 10,
    },
    submitText: {
        color: 'white',
        fontSize: 17,
    },
    projectName: {
        fontWeight: 'bold',
        color: Colors.primary,
    }
})

export default AddNote;