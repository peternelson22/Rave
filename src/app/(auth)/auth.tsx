import Button from '@/components/Button';
import { Redirect, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

const AuthScreen = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleAuth = () => {
    Keyboard.dismiss();
    if (isSignUp) {
      console.log('Sign Up:', { name, email, password });
      router.push('/(user)/');
      // Add your sign up logic here
    } else {
      console.log('Sign In:', { email, password });
      // Add your sign in logic here
    }
  };

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
      {/* <Tabs.Screen options={{ title: isSignIn ? 'Sign In' : 'Sign Up' }} /> */}

      <Text style={styles.label}>Email</Text>
      {isSignUp && (
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='Name'
          autoCapitalize='none'
          textContentType='name'
        />
      )}
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
      <Button onPress={handleAuth} text={isSignUp ? 'Sign Up' : 'Sign In'} />
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
