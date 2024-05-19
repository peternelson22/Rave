import { Redirect } from 'expo-router';

const index = () => {
  return <Redirect href={'/(user)/menu/'} />;
};

export default index;
