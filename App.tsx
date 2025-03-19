{/* Importation des composantes utilisées dans le projet */}
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

{/*
  Le style peut être implémenté dans les balises <View> et <Text> (comme dans HTML), 
  sinon créer et importer avec variable stylesheet comme plus bas.
  StyleSheet s'écrit ainsi!!!! 2 'S' majuscules!

  # <View> = Composante de base pour afficher des éléments. Supporte layout avec flexbox, style, touch handling, etc.
  ======================================================================================================================================
  # SafeArea tags (<SafeAreaView>, <SafeAreaProvider>, etc.) = Composantes pour gérer les zones de sécurité sur les appareils mobiles
                                                               (A.K.A. barre de status, Indicateurs IOS, Barre nav Android, etc.).
  ======================================================================================================================================
*/}
{/* Ici j'utilise ma propre StyleSheet */ }
import styles from './style/styles';

{/* 
 # Création d'un Props (propriété). 
   Un Props sert d'argument à une fonction dans JS et d'attribut HTML.
  ======================================================================================================================================
  Ici le Props est utilisé pour générer des nombres au hasard. 
  On peut ajouter des types de données comme string, number, boolean, etc.
  Ici, on a un type de données string ou number.
*/}
type randomProps = {
  nombres: string | number;
};

{/* 
  Création d'un Props pour la navigation entre les écrans.
*/}
const Stack = createNativeStackNavigator();

{/*
  Création d'une fonction pour la navigation entre les écrans.
  On peut ajouter des props pour les styles, les textes, les images, etc.
  Ici on a une page d'"acceuil" et une page secondaire vide.
*/}
const monStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/*
          1- Page Principale de l'application.
        */}
        <Stack.Screen name="HelloApp" component={HelloApp} />

        {/*
          2- Page Secondaire de l'application.
        */}
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HelloApp = ({ navigation }: any) => {
  {/* 
    Utilisation de useState pour changer l'état des éléments. 
    Ici, on change l'état de la variable estClicke.
    Elle passe de false à true lorsqu'on appuie sur le bouton.
  */}
  const [estClicke, setClicke] = useState(false);

  {/* 
    # useState() = hook pour changer l'état des éléments. Il traque les changements d'état.
    ======================================================================================================================================
    Ici, on change l'état de la variable randomNumber.
    Elle passe de 0 à un nombre aléatoire entre 1 et 10 lorsqu'on appuie sur le bouton.
  */}
  const [randomNumber, setRandomNumber] = useState(0); // État de base à 0. 
                                                      // À changer pour un nombre aléatoire

  return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          {/* 
            Implémentation d'une image 
          */}
          <Image style={styles.image}
            //  # source = Propriété pour afficher une image. 
            //  # require = Méthode pour importer une image.  
            source={
              require('./img/execution-sans-jugement-sous-les-rois-maures-de-Grenade.jpg')
            }
          ></Image>

          {/* 
            # <Text> = Composante de base pour afficher du texte. 
            ======================================================================================================================================

            # <Random/> = Appel de la fonction custom 'Random' pour afficher un nombre entre 1 et 10 au hasard.
        */}
          <Text style={styles.text}>
            Hello, world! <Random nombres={randomNumber} />
          </Text>

          {/* 
              # <Button> = bouton mais important d'ajouter title et onPress donc texte du bouton et action une fois appuyé. 
                           On peut ajouter d'autres props comme color, disabled, etc.
              ======================================================================================================================================
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
  # <TouchableOpacity> = Bouton mais plus de flexibilité pour le style. On peut ajouter des styles, des images, des textes, etc. 
    Il a un effet de pression lorsqu'on appuie dessus (l'opacité change).
    Il existe d'autre "Touchable" comme <TouchableHighlight>, <TouchableNativeFeedback>, <TouchableWithoutFeedback> qui ont des effets différents.
*/}
          <TouchableOpacity style={styles.boutonTouchable} onPress={() => {
            const randomNumber = Math.floor(Math.random() * 100);
            setRandomNumber(randomNumber);
          }}>
            <Text>Non, appuie ici!</Text>
          </TouchableOpacity>

          <TouchableHighlight 
            style={styles.boutonPage2} 
            
            onPress={() => {
              navigation.navigate('Page2');
            }}
          >
            <Text>Page 2</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
  );
};

{/* 
  Création d'une fonction pour la page 2 de l'application.
  On peut ajouter des props pour les styles, les textes, les images, etc.
*/}
const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 2</Text>
    </View>
  );
}

{/* 
  Création d'une fonction Random pour générer des nombres au hasard.
  On peut ajouter des props pour les styles, les nombres, etc.
*/}
const Random = ({ nombres }: randomProps) => {
  return (
    <Text>{nombres}</Text> // En attendant que l'utilisateur appuie sur le bouton pour générer le nombre par défaut: 0.
  );
}

export default monStack;