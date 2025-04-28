import { JSX } from 'react';
import * as Yup from 'yup';

export type Step = {
  name: string;
  component: JSX.Element;
  validationSchema?: Yup.ObjectSchema<any>;
  exitWithoutWarning?: boolean;
};

export type DemoCharacter = {
  name: string;
  player: string;
  age: string;
  race: string;
  background: string;
  personality: string;
  ideals: string;
  flaws: string;
};
