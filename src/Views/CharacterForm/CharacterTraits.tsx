import { Box, Button, Flex, FormLabel, Textarea } from '@chakra-ui/react';
import { DemoCharacter } from './types';
import useSteppedForm from '../../Store/createSteppedFormStore';

const CharacterTraits: React.FC<{}> = () => {
  const form = useSteppedForm((state) => state.form) as DemoCharacter;
  const setForm = useSteppedForm((state) => state.setForm);
  const prevStep = useSteppedForm((state) => state.prevStep);
  const nextStep = useSteppedForm((state) => state.nextStep);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value } as DemoCharacter);
  };

  return (
    <Flex flexDir='column' gap={'20px'}>
      <Box>
        <FormLabel>Personality traits</FormLabel>
        <Textarea
          name='personality'
          value={form?.personality ?? ''}
          placeholder='Give your character some personality.'
          onChange={inputOnChange}
          _readOnly={{
            color: 'gray.500',
            bgColor: 'gray.100',
            _hover: undefined,
          }}
        />
      </Box>
      <Box>
        <FormLabel>Ideals</FormLabel>
        <Textarea
          name='ideals'
          value={form?.ideals ?? ''}
          placeholder='Fundamental beliefs that a character holds and that guide their actions and decisions.'
          onChange={inputOnChange}
          _readOnly={{
            color: 'gray.500',
            bgColor: 'gray.100',
            _hover: undefined,
          }}
        />
      </Box>
      <Box>
        <FormLabel>Flaws</FormLabel>
        <Textarea
          name='flaws'
          value={form?.flaws ?? ''}
          placeholder='Negative character traits or weaknesses that a player can choose.'
          onChange={inputOnChange}
          _readOnly={{
            color: 'gray.500',
            bgColor: 'gray.100',
            _hover: undefined,
          }}
        />
      </Box>
      <Flex justifyContent={'end'}>
        <Button variant={'solid'} onClick={() => prevStep(form)}>
          Previous
        </Button>
        <Button variant={'solid'} onClick={() => nextStep(form)}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default CharacterTraits;
