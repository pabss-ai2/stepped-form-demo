import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SteppedForm from './SteppedForm';
import { Step } from '../Views/CharacterForm/types';

type SteppedFormDrawerProps = {
  steps: Step[];
  defaultValues: Record<string, unknown> | null;
};

const SteppedFormDrawer = ({ steps, defaultValues }: SteppedFormDrawerProps) => {
  const navigate = useNavigate();

  return (
    <Drawer isOpen onClose={() => navigate(-1)} placement='right' size='100%' closeOnEsc={false}>
      <DrawerOverlay />
      <DrawerContent padding='0px'>
        <DrawerBody padding='0px' height={'100%'}>
          <SteppedForm initSteps={steps} defaultValues={defaultValues} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SteppedFormDrawer;
