
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/Routes';
import styles from './src/styles/form';


export default function App() {
  return (
    <View style={styles.container}>
      <Routes></Routes>
    </View>
  );
}

