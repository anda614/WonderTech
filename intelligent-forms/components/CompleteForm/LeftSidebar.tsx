import { Stack, Link } from '@chakra-ui/react';

const LeftSidebar = () => {
  return (
    <Stack>
      <Link href="/">Home</Link>
      <Link href="/my-forms">My Forms</Link>
      <Link href="/delete-form">Delete Form</Link>
      <Link href="/update-form">Update Form</Link>
    </Stack>
  );
};

export default LeftSidebar;
