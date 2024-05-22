import { useUserOrderList } from '@/api/orders';
import OrderListItem from '@/components/OrderListItem';
import { ActivityIndicator, FlatList, Text } from 'react-native';

export default function OrdersScreen() {
  const { data: orders, error, isLoading } = useUserOrderList();

  if (isLoading) {
    return <ActivityIndicator color='blue' size='small' />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }
  return (
    <>
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
