import { Redirect } from 'expo-router';

const index = () => {
  return <Redirect href={'/(admin)/menu/'} />;
};

export default index;
