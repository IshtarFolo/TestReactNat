// Styles.ts
import {StyleSheet} from 'react-native';

{/* 
  Création des styles pour le projet. Ici fait directement dans le fichier principal. 
  On peut créer un fichier séparé pour les styles et les importer dans le fichier principal. Pour ce faire, créer un fichier styles.tsx et y mettre les styles puis importer dans le fichier principal 
  avec importation styles de './styles';.
  
  */}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,1)',
    },
    text: {
      color: 'white',
      fontSize: 30,
    },
    safeContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,1)',
    },
    boutonTouchable: {
      width: 200, 
      height: 50,
      backgroundColor: 'rgba(255,255,255,1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
  });

  export default styles;