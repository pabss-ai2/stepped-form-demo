import { Box, Button, Flex, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { DemoCharacter } from './types';
import useSteppedForm from '../../Store/createSteppedFormStore';

type CharacterDetailsProps = {
  readOnly?: boolean;
};

const FormInput = ({ label, name, value, onChange, readOnly }: any) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Input
      name={name}
      value={value}
      type='text'
      onChange={onChange}
      readOnly={readOnly}
      _readOnly={{
        color: 'gray.500',
        bgColor: 'gray.100',
        _hover: undefined,
      }}
    />
  </Box>
);

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ readOnly }) => {
  const form = useSteppedForm((state) => state.form) as DemoCharacter;
  const isValid = useSteppedForm((state) => state.isCurrentStepValid);
  const setForm = useSteppedForm((state) => state.setForm);
  const nextStep = useSteppedForm((state) => state.nextStep);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value } as DemoCharacter);
  };

  const handleNextStep = async () => {
    nextStep(form)
  };

  return (
    <Flex flexDir='column' gap={'20px'}>
      <FormInput
        label='Character name'
        name='name'
        value={form?.name ?? ''}
        onChange={readOnly ? undefined : inputOnChange}
        readOnly={readOnly}
      />
      <FormInput
        label='Player name'
        name='player'
        value={form?.player ?? ''}
        onChange={readOnly ? undefined : inputOnChange}
        readOnly={readOnly}
      />
      <FormInput
        label='Age'
        name='age'
        value={form?.age ?? ''}
        onChange={readOnly ? undefined : inputOnChange}
        readOnly={readOnly}
      />
      <FormInput
        label='Race'
        name='race'
        value={form?.race ?? ''}
        onChange={readOnly ? undefined : inputOnChange}
        readOnly={readOnly}
      />
      <Box>
        <FormLabel>Background</FormLabel>
        <Textarea
          name='background'
          value={form?.background ?? ''}
          placeholder='Give your character some background and history of who they are.'
          onChange={readOnly ? undefined : inputOnChange}
          readOnly={readOnly}
          _readOnly={{
            color: 'gray.500',
            bgColor: 'gray.100',
            _hover: undefined,
          }}
        />
      </Box>
      {!readOnly && (
        <Flex justifyContent={'end'}>
          <Button variant={'solid'} onClick={handleNextStep} isDisabled={!isValid}>
            Next
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default CharacterDetails;
