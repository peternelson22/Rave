import Button from '@/components/Button';
import CartListItem from '@/components/CartListItem';
import { useCart } from '@/store/CartProvider';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, FlatList } from 'react-native';

const CartScreen = () => {
  const { items, total, checkout } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartListItem key={item.id} cartItem={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
        Total: ${total.toFixed(2)}
      </Text>
      <Button onPress={checkout} text='Checkout' />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};
export default CartScreen;
