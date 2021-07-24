import React from 'react';

import { SEO } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const IndexPage = () => (
  <DefaultLayout>
    <SEO />
    <h1>Test page</h1>
    <h2>Test page</h2>
    <h3>Test page</h3>
    <h4>Test page</h4>
    <h5>Test page</h5>
    <h6>Test page</h6>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam
      rerum dolorem aspernatur! Eligendi, ad, nulla nobis amet odio aliquid
      magni qui obcaecati odit sint inventore eos incidunt, dolor hic.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
      totam, quisquam natus quos quaerat fuga ipsum. Ut dolor labore sunt
      voluptates reprehenderit, cum pariatur suscipit reiciendis, placeat
      adipisci eos!
    </p>
  </DefaultLayout>
);

export default IndexPage;
