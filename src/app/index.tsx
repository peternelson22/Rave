import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Link, Redirect, Stack } from 'expo-router';
import Button from '@/components/Button';
import { useAuth } from '@/store/AuthProvider';
import { supabase } from '@/lib/supabase';

const index = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator color='blue' size='small' />;
  }

  if (!session) {
    return <Redirect href={'/auth'} />;
  }
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
        <Button text='Sign out' onPress={() => supabase.auth.signOut()} />
      </View>
    </>
  );
};

export default index;
