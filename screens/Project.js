import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, Image, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { LinearGradient} from 'expo-linear-gradient';
import Note from '../components/Note/Note';

function Project(props) {
    // Variables
    const project = props.route.params.item;
   const notes = useSelector(state => state.notes).filter(notes => note.projectId == project.id)

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Ionicons name='arrow-back' size={23} color= 'white' />
                    </View>
                </TouchableOpacity>
            <Text style={styles.title}>{project.name}</Text>
            {notes[0] ? (
                <>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('addNote', {project: project})}>
                    <View style={styles.smallAddButton}>
                        <Text style={styles.smallAddButtonText}>Ajouter une Note</Text>
                    </View>
                </TouchableOpacity>
            <FlatList data={notes} renderItem={({item}) => <Note item={item} /> }
            />
            </>
            ) : (
            <>
            <Image 
            source={require('../assets/empty.png')} 
            style={styles.image}
            />
            <Text>Commencez par ajouter votre première note pour ce projet</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('addNote', {project: project})} style={{marginBottom: 30}}>
                <LinearGradient colors={['#A996F2', '#8F79FC']} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Ajouter une note</Text>
                </LinearGradient>
            </TouchableOpacity>
            </>
            )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        paddingHorizontal: 25,
    },
    backButton: {
       backgroundColor: Colors.primary, 
       height: 30,
       width: 30,
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: Platform.OS === 'android' ? 50 : 0,
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    image: {
        width: 350,
        height: 200,
    },
    addButton: {
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
    smallAddButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 140,
        borderRadius: 15,
        backgroundColor: Colors.primary,
        alignSelf: 'flex-end',
    },
    smallAddButtonText: {
        color: 'white', 
    }
})

export default Project;