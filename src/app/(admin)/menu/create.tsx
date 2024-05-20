import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { defaultImage } from 'utils';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const resetFields = () => {
    setName('');
    setPrice('');
  };

  const validateInputs = () => {
    setErrors('');
    if (!name) {
      setErrors('Name is required');
      return false;
    }
    if (!price) {
      setErrors('Price is required');
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price is anot a number');
      return false;
    }
    return true;
  };
  const create = () => {
    if (!validateInputs()) {
      return;
    }
    console.warn('Creating...');

    resetFields();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Create Product' }} />
      <Image source={{ uri: image || defaultImage }} style={styles.image} />
      <Text onPress={pickImage} style={styles.imageText}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder='Name'
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        placeholder='9.99'
        keyboardType='numeric'
      />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <Button onPress={create} text='Create' />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
    borderRadius: 100,
  },
  imageText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
