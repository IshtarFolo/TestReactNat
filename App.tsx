import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

{/* Ma StyleSheet */ }
import styles from './style/styles';
  
{/* 
  Importation de NavigationContainer pour la navigation entre les écrans.
  On peut ajouter des props comme initialRouteName, screenOptions, etc.
*/}
import { NavigationContainer } from '@react-navigation/native';

{/* 
  Création d'un Props pour générer des nombres au hasard. 
  On peut ajouter des types de données comme string, number, boolean, etc.
  Ici, on a un type de données string ou number.
*/}
type randomProps = {
  nombres: string | number;
};

{/*
  Le style peut être implémenté dans les balises <View> et <Text> (comme dans HTML), sinon créer et importer avec variable stylesheet comme plus bas.
  StyleSheet s'écrit ainsi!!!! 2 'S' majuscules!

  <View> = Composante de base pour afficher des éléments. Supporte layout avec flexbox, style, touch handling, etc.
  SafeArea tags (<SafeAreaView>, <SafeAreaProvider>, etc.) = Composantes pour gérer les zones de sécurité sur les appareils mobiles (A.K.A. barre de status, Indicateurs IOS, Barre nav Android, etc.).
*/}
const HelloApp = () => {
  {/* 
    Utilisation de useState pour changer l'état des éléments. 
    Ici, on change l'état de la variable estClicke.
    Elle passe de false à true lorsqu'on appuie sur le bouton.
  */}
  const [estClicke, setClicke] = useState(false);

  {/* 
    Utilisation de useState pour changer l'état des éléments. 
    Ici, on change l'état de la variable randomNumber.
    Elle passe de 0 à un nombre aléatoire entre 1 et 10 lorsqu'on appuie sur le bouton.
  */}
  const [randomNumber, setRandomNumber] = useState(0); // À changer pour un nombre aléatoire

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>

          {/* Utilisation du Props 'source' */}
          <Image style={styles.image}


            //  source = Propriété pour afficher une image. 
            //  On peut ajouter des styles, des textes, des boutons, etc.
            //  require = Méthode pour importer une image. 
            //  </View>  On peut ajouter des styles, des textes, des boutons, etc.  
            source={
              require('./img/execution-sans-jugement-sous-les-rois-maures-de-Grenade.jpg')
            }
          ></Image>

          {/* 
        <Text> = Composante de base pour afficher du texte. 
        On peut ajouter des styles, des images, des boutons, etc.
        <Random/> = Appel de la fonction Random pour afficher un nombre entre 1 et 10 au hasard.
      */}
          <Text style={styles.text}>
            Hello, world! <Random nombres={randomNumber} />
          </Text>

          {/* 
  <Button> = bouton mais important d'ajouter title et onPress donc texte du bouton et action une fois appuyé. 
  On peut ajouter d'autres props comme color, disabled, etc.
*/}
          <Button onPress={() => {
            setClicke(true);
          }}
            disabled={estClicke}
            title={estClicke ? 'MERCI!' : 'Clique-moi!'}
          >
          </Button>

          {/* Remet le bouton à son état de base */}
          <Button onPress={() => {
            setClicke(false);
          }}
            title="Reset!"
          ></Button>

          {/*
  <TouchableOpacity> = Bouton mais plus de flexibilité pour le style. On peut ajouter des styles, des images, des textes, etc. Il a un effet de pression lorsqu'on appuie dessus (l'opacité change).
  Il existe d'autre "Touchable" comme <TouchableHighlight>, <TouchableNativeFeedback>, <TouchableWithoutFeedback> qui ont des effets différents.
*/}
          <TouchableOpacity style={styles.boutonTouchable} onPress={() => {
            const randomNumber = Math.floor(Math.random() * 100);
            setRandomNumber(randomNumber);
          }}>
            <Text>Non, appuie ici!</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

{/* 
  Création d'une fonction Random pour générer des nombres au hasard.
  On peut ajouter des props pour les styles, les nombres, etc.
*/}
const Random = ({ nombres }: randomProps) => {
  return (
    <Text>{nombres}</Text> // En attendant que l'utilisateur appuie sur le bouton pour générer le nombre par défaut: 0.
  );
}

export default HelloApp;