import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ href: null }} />
      <Tabs.Screen
        name='menu'
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='cutlery' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='orders'
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
        }}
      />
    </Tabs>
  );
}
