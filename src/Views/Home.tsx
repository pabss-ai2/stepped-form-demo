import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Heading>Character Builder</Heading>
        <Button variant={'solid'} onClick={() => navigate('/create-character')}>
            Build Character
        </Button>
    </Flex>
    );
};

export default Home;
