import React from 'react';
import {SafeAreaView, Text, View, Button, Alert, TouchableOpacity} from 'react-native';

{/* Ma StyleSheet */}
import styles from './style/styles';


{/*
  Le style peut être implémenté dans les balises <View> et <Text> (comme dans HTML), sinon créer et importer avec variable stylesheet comme plus bas.
  StyleSheet s'écrit ainsi!!!! 2 'S' majuscules!

  <View> = Composante de base pour afficher des éléments. Supporte layout avec flexbox, style, touch handling, etc.
  SafeArea tags (<SafeAreaView>, <SafeAreaProvider>, etc.) = Composantes pour gérer les zones de sécurité sur les appareils mobiles (A.K.A. barre de status, Indicateurs IOS, Barre nav Android, etc.).
*/}

const HelloApp = () => {
  return(
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>

      <Text style={styles.text}>Hello, world!</Text>

{/* 
  <Button> = bouton mais important d'ajouter title et onPress donc texte du bouton et action une fois appuyé. 
  
*/}
      <Button onPress={() => {
        Alert.alert('Bouton appuyé!');
      }}
      title="Appuyez-moi!"
      >
      </Button>

{/*
  <TouchableOpacity> = Bouton mais plus de flexibilité pour le style. On peut ajouter des styles, des images, des textes, etc. Il a un effet de pression lorsqu'on appuie dessus (l'opacité change).
  Il existe d'autre "Touchable" comme <TouchableHighlight>, <TouchableNativeFeedback>, <TouchableWithoutFeedback> qui ont des effets différents.
*/}
      <TouchableOpacity style={styles.boutonTouchable} onPress={() => {
        Alert.alert('Bouton 2 appuyé!');
      }}>
        <Text>Appuyez ici aussi!</Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
  );
};



export default HelloApp;