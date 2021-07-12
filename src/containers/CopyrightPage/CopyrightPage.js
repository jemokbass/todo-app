import React, { useContext } from 'react';

import { LanguageContext } from '@src/shared/context';

const CopyrightPage = () => {
  const resources = useContext(LanguageContext);

  return (
    <section className="copyright container">
      <h2 className="copyright__title">{resources.copyright_title}</h2>
    </section>
  );
};

export default CopyrightPage;
