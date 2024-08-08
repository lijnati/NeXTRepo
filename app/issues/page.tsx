import { Flex, Text, Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function Issues() {
  return (
    <div>
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      
    </Flex>

    <Button><Link href='/issues/new'>New Issue</Link> </Button>

    </div>
  );
}

