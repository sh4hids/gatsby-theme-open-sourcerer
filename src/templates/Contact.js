import React from 'react';

import { Text } from '../components';
import { DefaultLayout } from '../layouts';

const Contact = () => (
  <DefaultLayout title="About" description="" url="/about/">
    <Text>Email: john@doe.com</Text>
  </DefaultLayout>
);

export default Contact;
