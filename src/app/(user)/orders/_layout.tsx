import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Orders' }} />
    </Stack>
  );
};
export default OrderLayout;
