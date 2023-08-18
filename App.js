import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Images from './assets/img/cat.png';
import axios from './utils/axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 65,
    marginBottom: 30,
  },
});

const App = () => {
  const [num, setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [weather, setWeather] = useState();
  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get();
        setData(res.data);
        setWeather(res.data?.weather);
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, [setData]);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 20 }}>
            {weather?.map((item) => {
              item.description;
              console.log(item.description);
            })}
          </Text>
          <Button
            title="Toggle"
            color="green"
            onPress={() => {
              setIsLoading(!isLoading);
            }}
          ></Button>
          {isLoading ? <ActivityIndicator size="large" color="orange" /> : ''}
        </View>
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <Text style={{ marginBottom: 20 }}>Button {num}</Text>
          <Button
            title="plus"
            onPress={() => {
              setNum(num + 1);
            }}
          />
        </View>
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <Button
            title="minus"
            onPress={() => {
              {
                num === 0 ? 0 : setNum(num - 1);
              }
            }}
          />
        </View>
        <View style={{ marginBottom: 20, alignItems: 'center' }}>
          <Button
            title="reset"
            onPress={() => {
              setNum(0);
            }}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, alignSelf: 'center' }}>
            TextInput
          </Text>
          <TextInput
            style={{ height: 40, borderWidth: 1, paddingLeft: 10 }}
            placeholder="type here"
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              setNum(num + 10);
            }}
          >
            <Text style={{ width: 150, textAlign: 'center', borderWidth: 1 }}>
              Power Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Image(uri)</Text>
          <TouchableOpacity
            onPress={() => {
              console.log(num), setNum(888);
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg',
              }}
              style={{ height: 400, width: 200 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Image(src)</Text>
          <TouchableOpacity
            onPress={() => {
              console.log(num), setNum(999);
            }}
          >
            <Image source={Images} style={{ height: 400, width: 200 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }}>Text:</Text>
          <Text style={{ fontSize: 24 }}>Hello Moto!</Text>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </>
  );
};

export default App;
