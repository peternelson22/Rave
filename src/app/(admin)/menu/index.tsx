import ProductListItem from '@/components/ProductListItem';
import products from '@assets/data/products';
import { FlatList, Image, StyleSheet } from 'react-native';

export default function MenuScreen() {
  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
