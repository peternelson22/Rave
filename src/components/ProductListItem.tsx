import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

const defaultImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }: ProductListProps) => {
  const { name, image, price } = product;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image || defaultImage }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text>${price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
