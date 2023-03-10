import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

function Projects(props) {
    // Variables 
    const projects = useSelector(state => state.projects);
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.containerProject}>
                <Text style={styles.title}>Projets</Text>
                {projects[0] && (<TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('addProject')}>
                    <View style={styles.smallAddButton}>
                        <Text style={styles.smallAddButtonText}>Ajouter</Text>
                        </View>
                        </TouchableOpacity>)}
                </View>
                {!projects[0] ? 
                    <View style={styles.emptyProject}>
                <Image source={require('../assets/folder.png')} style={styles.illustration}/>
                <Text>Commencer par crér votre premier projet.</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('addProject')}>
                    <LinearGradient colors={['#A996F2', '#8F79FC']} style={styles.addButton}>
                        <Text style={styles.addButtonText}>Créer un projet</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
: <FlatList data={projects} renderItem={({item}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Project', {item: item})}>
        <View style={styles.project}>
            <Text style={styles.projectText}>{item.name}</Text>
        </View>
    </TouchableOpacity>
)}/>} 
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    illustration: {
        width: 150,
        height: 150,
        marginBottom: 15,
    },
    emptyProject: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    project: {
        backgroundColor: Colors.primaryFaded,
        padding: 15,
        marginBottom: 15,
        borderRadius: 15,
    },
    projectText: {
        fontSize: 17,
    },
    containerProject: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: Platform.OS === 'android' ? 50 : 30
    },
    smallAddButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 70,
        borderRadius: 15,
        backgroundColor: Colors.primary,
    },
    smallAddButtonText: {
        color: 'white',
    }
})

export default Projects;