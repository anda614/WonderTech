import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

const MainContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box w="70%" p="10">
      <Heading size="lg">Create a new form</Heading>
      <VStack mt="6" spacing="6">
        <Box w="100%">
          <Text>First Name:</Text>
          <input type="text" name="firstName" onChange={handleChange} />
        </Box>
        <Box w="100%">
          <Text>Last Name:</Text>
          <input type="text" name="lastName" onChange={handleChange} />
        </Box>
        <Box w="100%">
          <Text>Email:</Text>
          <input type="email" name="email" onChange={handleChange} />
        </Box>
        <Button colorScheme="blue">Create Form</Button>
      </VStack>
    </Box>
  );
};

export default MainContent;
