import Button from '@/components/Button';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/store/AuthProvider';
import { View, Text } from 'react-native';
const profile = () => {
  const { session } = useAuth();
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          margin: 10,
          fontSize: 30,
          fontWeight: '600',
        }}
      >
        Welcome {session?.user.email}
      </Text>
      <Button
        text='Sign out'
        onPress={async () => await supabase.auth.signOut()}
      />
    </View>
  );
};
export default profile;
