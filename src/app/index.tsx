import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import Button from '@/components/Button';

const index = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Welcome to RAVE' }} />
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Link href={'/(user)'} asChild>
          <Button text='User' />
        </Link>
        <Link href={'/(admin)'} asChild>
          <Button text='Admin' />
        </Link>
        <Link href={'/(auth)/auth'} asChild>
          <Button text='Sign In' />
        </Link>
      </View>
    </>
  );
};

export default index;
