import Button from '@/components/Button';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AuthScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  const handleAuth = () => {
    Keyboard.dismiss();
    if (isSignUp) {
      signUp();
      // router.push('/(user)/');
    } else {
      signIn();
    }
  };

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
  };

  const getButtonText = () => {
    if (loading) {
      return isSignUp ? 'Creating account...' : 'Please wait...';
    }
    return isSignUp ? 'Sign Up' : 'Sign In';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        textContentType='emailAddress'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        style={styles.input}
      />
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text>
          {isSignUp ? 'Already have an account' : "Don't have an account?"}
        </Text>
        <Text onPress={toggleAuth} style={styles.toggleText}>
          {isSignUp ? 'Sign in' : 'Sign up'}
        </Text>
      </View>
      <Button onPress={handleAuth} disabled={loading} text={getButtonText()} />
    </View>
  );
};
export default AuthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  toggleText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  title: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 25,
  },
});
