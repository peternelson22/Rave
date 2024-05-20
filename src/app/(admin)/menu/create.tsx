import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import { PropsWithChildren, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { defaultImage } from 'utils';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const DismissKeyboard = ({ children }: PropsWithChildren) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

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

  const onSubmit = () => {
    if (isUpdating) {
      update();
    } else {
      create();
    }
    Keyboard.dismiss();
  };
  const create = () => {
    if (!validateInputs()) {
      return;
    }
    console.warn('Creating...');

    resetFields();
  };

  const update = () => {
    if (!validateInputs()) {
      return;
    }
    console.warn('Updating...');

    resetFields();
  };
  const onDelete = () => {
    console.warn('Deleted');
  };
  const confirmDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this product?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: onDelete },
    ]);
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
    <DismissKeyboard>
      <View style={styles.container}>
        <Stack.Screen
          options={{ title: isUpdating ? 'Update Product' : 'Create Product' }}
        />
        <Image source={{ uri: image || defaultImage }} style={styles.image} />
        <Text onPress={pickImage} style={styles.textBtn}>
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
        <Button onPress={onSubmit} text={isUpdating ? 'Update' : 'Create'} />
        {isUpdating && (
          <Text onPress={confirmDelete} style={styles.textBtn}>
            Delete
          </Text>
        )}
      </View>
    </DismissKeyboard>
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
  textBtn: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
