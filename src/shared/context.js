import { createContext } from 'react';

import * as resources from '@src/assets/localize/resources.json';

export const LanguageContext = createContext(resources);
