import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { JSX, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSteppedForm from '../Store/createSteppedFormStore';
import { Step } from '../Views/CharacterForm/types';
import { debounce } from '../utils';

type SteppedFormProps = {
  initSteps: Step[];
  defaultValues: Record<string, unknown> | null;
};

const SteppedForm = ({ initSteps, defaultValues }: SteppedFormProps): JSX.Element => {
  const navigate = useNavigate();
  const { form, currentStep, steps, setForm, setSteps, setCurrentStepValid, validateCurrentStep } =
    useSteppedForm();
  const debounceValidation = debounce(async () => await validateCurrentStep(), 500);

  useEffect(() => {
    setSteps(initSteps);
  }, [initSteps]);

  useEffect(() => {
    setForm(defaultValues);
  }, [defaultValues]);

  useEffect(() => {
    setCurrentStepValid(false);
  }, [currentStep]);

  useEffect(() => {
    console.log('debounce validation')
    debounceValidation()
  }, [form]);

  return (
    <Flex flexDir={'column'} width='100%' height={'100%'} padding={8}>
      <Flex flexDir={'row-reverse'}>
        <Button variant={'solid'} onClick={() => navigate(-1)}>
          Exit
        </Button>
      </Flex>
      <Box flex={'1 0'}>
        <Flex gap={'16px'} height={'100%'}>
          <Flex
            flexDir={'column'}
            gap={'8px'}
            bgColor={'gray.200'}
            padding={'16px'}
            borderRadius={'5px'}
            border={'1px solid'}
            borderColor={'gray.400'}
            width={'280px'}
          >
            {steps?.map((step, index) => (
              <Box key={`character-step-${index}`}>
                <Flex gap={'12px'} alignItems={'center'}>
                  <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'24px'}
                    height={'24px'}
                    bgColor={index === currentStep ? 'gray.100' : 'gray.300'}
                    border={'1px solid'}
                    borderColor={'gray.400'}
                    borderRadius={'4px'}
                    fontSize={'xs'}
                    fontWeight={600}
                  >
                    {index + 1}
                  </Flex>
                  <Text
                    fontSize={'sm'}
                    color={index === currentStep ? 'brand.500' : 'black.100'}
                    fontWeight={600}
                  >
                    {step.name}
                  </Text>
                </Flex>
                {index !== steps.length - 1 && (
                  <Box
                    marginLeft={'12px'}
                    marginTop={'8px'}
                    height={'48px'}
                    width={'1px'}
                    bgColor={'gray.400'}
                  />
                )}
              </Box>
            ))}
          </Flex>
          <Flex flex='1' flexDirection='column' overflow='hidden'>
            <Flex
              flex='1'
              overflowY='auto'
              minHeight='0'
              flexDirection='column'
              padding='16px'
              bgColor='white'
            >
              {steps?.[currentStep]?.component}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SteppedForm;
