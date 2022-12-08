import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/Routes';
import styles from './src/styles/form';
import {Provider} from 'react-redux';
import {store} from './store'


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Routes></Routes>
    </View>
    </Provider>
  
  );
}

