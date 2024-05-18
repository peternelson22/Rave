import { Redirect } from 'expo-router';

const index = () => {
  return <Redirect href={'/menu/'} />;
};

export default index;
