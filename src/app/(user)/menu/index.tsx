import { useProductList } from '@/api/products';
import ProductListItem from '@/components/ProductListItem';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator color='blue' size='small' />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

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
