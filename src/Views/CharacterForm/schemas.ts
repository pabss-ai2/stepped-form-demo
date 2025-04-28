import * as Yup from 'yup';

export const characterDetailsSchema = Yup.object().shape({
  name: Yup.string().required(),
  player: Yup.string().required(),
  age: Yup.string().required(),
  race: Yup.string().required(),
  background: Yup.string().required(),
});

export const characterTraitsSchema = Yup.object().shape({
  personality: Yup.string().required(),
  ideals: Yup.string().required(),
  flaws: Yup.string().required(),
});

export const fullCharacterSchema = characterDetailsSchema.concat(characterTraitsSchema);
