import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import CartProvider from '@/store/CartProvider';
import AuthProvider from '@/store/AuthProvider';
import QueryProvider from '@/store/QueryProvider';
import NotificationProvider from '@/store/NotificationProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AuthProvider>
      <QueryProvider>
        <NotificationProvider>
          <CartProvider>
            <Stack>
              <Stack.Screen name='(auth)' options={{ headerShown: false }} />
              <Stack.Screen name='(admin)' options={{ headerShown: false }} />
              <Stack.Screen name='(user)' options={{ headerShown: false }} />
              <Stack.Screen
                name='index'
                options={{ title: 'Welcome to RAVE' }}
              />
              <Stack.Screen
                name='cart'
                options={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                }}
              />
            </Stack>
          </CartProvider>
        </NotificationProvider>
      </QueryProvider>
    </AuthProvider>
  );
}
