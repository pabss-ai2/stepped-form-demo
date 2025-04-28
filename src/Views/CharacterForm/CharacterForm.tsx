import { Box } from '@chakra-ui/react';
import SteppedFormDrawer from '../../Components/SteppedFormDrawer';
import CharacterDetails from './CharacterDetails';
import CharacterTraits from './CharacterTraits';
import { Step } from './types';
import { characterDetailsSchema, characterTraitsSchema } from './schemas';

const CHARACTER_FORM_STEPS: Step[] = [
  {
    name: 'Details',
    component: <CharacterDetails />,
    validationSchema: characterDetailsSchema
  },
  {
    name: 'Origins',
    component: <CharacterTraits />,
    validationSchema: characterTraitsSchema
  },
];

const CharacterForm: React.FC<{}> = () => {
  return (
    <Box padding={'32px'} height={'100%'}>
      <SteppedFormDrawer steps={CHARACTER_FORM_STEPS} defaultValues={{ name: 'Tito' }} />
    </Box>
  );
};

export default CharacterForm;
