import { Stack } from 'expo-router';
const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Orders' }} />
    </Stack>
  );
};
export default OrderLayout;
