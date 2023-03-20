import { useState } from 'react';
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Button, Stack } from '@chakra-ui/react';
import Layout from '../../components/Navbar2';
import React, { ReactNode } from 'react';
import stil from '../../styles/myForms.module.css';

import formimg1 from '../../images/folderss.png';
import formimg2 from '../../images/folderrs.png';
import formimg3 from '../../images/foldeers.png';
import formimg4 from '../../images/folders4.png';
import formimg5 from '../../images/folders5.png';
import formimg6 from '../../images/folders6.png';
import formimg7 from '../../images/losdersicon.png';
import Image from 'next/image';

import Link from 'next/link';
import appLogo2 from '../images/app-logo2.png';
import Head from 'next/head';
import appLogo from '../images/app-logo.png';


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
      <Heading className={stil.main} size="md" mb={2}>
        Search Form
      </Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none" />
        <Input className={stil.main1} type="text" placeholder="Search forms..." value={searchTerm} onChange={handleInputChange} />
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
      <Heading className={stil.main} size="md" mb={2}>
        Add Form
      </Heading>
      <Button className={stil.main1btn} onClick={handleClick}>Add Form</Button>
    </Box>
  );
};

type BoxesProps = {
  boxes: BoxItem[];
};

const Boxes = ({ boxes }: BoxesProps) => {
  return (
    <Box bg="gray.100" p={4}>
      <Heading className={stil.titledate} size="md" mb={2}>
        <br></br>
          My Forms
        <br></br>
      </Heading>
      <div className={stil.label}>---------------------------------------------------------------------------------------------------------------------------------</div>
     
    <div className={stil.main}>
      <Box>
        <div className={stil.allforms}> 
          <table>
                <tr>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg1} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg3} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg4} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div></th>
                </tr>
               
                <tr>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg5} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg6} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className={stil.form}>
                    <Image className={stil.formimg} src={formimg2} alt="Register Logo" width="80" height="73"></Image><br></br>
                      <label className={stil.titledate}>
                        Title FORM - DD/MM/YYYY
                      </label><br></br><br></br>
                      <label className={stil.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </label>
                    </div></th>
                </tr>

          </table>
        </div>
      </Box>
    </div>


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
      <Box className={stil.page}w="full" p={4}>
        <h1 className={stil.bigtitle}>Your Forms Files</h1><br></br>
        <table>
          <tr>
            <th><label className={stil.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. </label></th>
            <th><Image className={stil.img} src={formimg7} alt="Register Logo" width="80" height="73"></Image></th>
          </tr>
          </table> 
    
        <SearchBox />
          <AddBoxButton onAddBox={handleAddBox}></AddBoxButton>
        <Boxes boxes={boxes} />
      </Box> 
    </Flex>
  );

  //<AddBoxButton onAddBox={handleAddBox} showAddBoxButton={showAddBoxButton} ></AddBoxButton>
  
}
