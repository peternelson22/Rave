import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
import { defaultImage } from '@/utils';
import { Tables } from '@/types/database-types';
import RemoteImage from './RemoteImage';

type ProductListProps = {
  product: Tables<'products'>;
};

const ProductListItem = ({ product }: ProductListProps) => {
  const { name, price } = product;

  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <RemoteImage
          path={product.image}
          fallback={defaultImage}
          resizeMode='contain'
          style={styles.image}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%',
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
