import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@chakra-ui/react';

const BrowserUrlInput: React.FC = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(url);
    }
  };

  return (
    <div>
      <Input type="text" id="browser-url-input" placeholder="www ..." value={url} onChange={handleInputChange} onKeyPress={handleKeyPress} />
    </div>
  );
};

export default BrowserUrlInput;
