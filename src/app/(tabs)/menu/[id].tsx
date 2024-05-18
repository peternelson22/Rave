import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@assets/data/products';
import { defaultImage } from 'utils';
import Button from '@/components/Button';

const sizes = ['S', 'M', 'X', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn('Adding to cart...');
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={{ fontSize: 20 }}>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size, index) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={index}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? 'black' : 'gray' },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{product.price}</Text>
      <Button onPress={addToCart} text='Add to cart' />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
