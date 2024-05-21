import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { useAuth } from '@/store/AuthProvider';

export default function AuthLayout() {
  const { session } = useAuth();
  if (session) {
    return <Redirect href={'/'} />;
  }
  return <Slot />;
}
