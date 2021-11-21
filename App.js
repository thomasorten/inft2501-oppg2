import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

function HomeScreen({navigation}) {

  const [randNum, setRandNum] = useState(getRandomInt(0, 100));

  const [numberOne, setNumberOne] = useState(getRandomInt(0, 100));
  const [numberTwo, setNumberTwo] = useState(getRandomInt(0, 100));

  const [answer, setAnswer] = useState(8);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Random number is ${randNum}`,
    });
  });

  const onAdd = () => {
    const sum = parseInt(numberOne) + parseInt(numberTwo);
    if (sum === parseInt(answer)) {
      Toast.show({
        type: 'success',
        text1: `Riktig!`,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: `Feil, riktig svar er ${sum}`,
      });
    }
  };

  const onMultiply = () => {
    const sum = parseInt(numberOne) * parseInt(numberTwo);
    if (sum === parseInt(answer)) {
      Toast.show({
        type: 'success',
        text1: `Riktig!`,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: `Feil, riktig svar er ${sum}`,
      });
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom: 30}}>Random numbers</Text>
      <Text>Tilfeldig tall 1: {numberOne}</Text>
      <Text style={{marginBottom: 30}}>Tilfeldig tall 2: {numberTwo}</Text>

      <Text>Svar:</Text>
      <TextInput
        style={styles.input}
        value={`${answer}`}
        onChangeText={setAnswer}
      />

      <Text>Øvre grense:</Text>
      <TextInput
        style={styles.input}
        value={`${limit}`}
        onChangeText={setLimit}
      />

      <View style={styles.fixToText}>
        <Button
          title="Adder"
          onPress={() => onAdd()}
        />
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Multipliser"
          onPress={() => onMultiply()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
