import { useState } from 'react';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Button, Stack } from '@chakra-ui/react';
import Layout from '../../components/Navbar2';

type BoxItem = {
  id: number;
  text: string;
};

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box bg="gray.100" p={4} mb={4}>
      <Heading size="md" mb={2}>
        Search Box
      </Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none" />
        <Input type="text" placeholder="Search boxes..." value={searchTerm} onChange={handleInputChange} />
      </InputGroup>
    </Box>
  );
};

type AddBoxButtonProps = {
  onAddBox: () => void;
};

const AddBoxButton = ({ onAddBox }: AddBoxButtonProps) => {
  const handleClick = () => {
    onAddBox();
  };

  return (
    <Box bg="gray.100" p={4} mb={4}>
      <Heading size="md" mb={2}>
        Add Box Button
      </Heading>
      <Button onClick={handleClick}>Add Box</Button>
    </Box>
  );
};

type BoxesProps = {
  boxes: BoxItem[];
};

const Boxes = ({ boxes }: BoxesProps) => {
  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md" mb={2}>
        Boxes
      </Heading>
      <Stack direction="row" spacing={4} wrap="wrap">
        {boxes.map((box) => (
          <Box key={box.id} w={{ base: '100%', sm: '50%', md: '33.33%' }} p={4} bg="white" borderWidth="1px" rounded="md" shadow="md">
            {box.text}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default function MyForms() {
  const [showAddBoxButton, setShowAddBoxButton] = useState(false);
  const [boxes, setBoxes] = useState<BoxItem[]>([]);

  const handleAddBox = () => {
    if (boxes.length >= 9) {
      // Maximum of 3 boxes per row, so limit to 9 boxes total
      return;
    }

    const newBox = {
      id: Date.now(),
      text: `Box ${boxes.length + 1}`,
    };

    setBoxes([...boxes, newBox]);
    setShowAddBoxButton(boxes.length < 8);
  };

  return (
    <Flex>
      <Box>
        <Layout />
      </Box>
      <Box w="full" p={4}>
        <SearchBox />
        <AddBoxButton onAddBox={handleAddBox} showAddBoxButton={showAddBoxButton} />
        <Boxes boxes={boxes} />
      </Box>
    </Flex>
  );
}
