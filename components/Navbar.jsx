import { Box, Heading, Stack, Text, Button, Container, Image, Flex, Spacer  } from '@chakra-ui/react'
import Link from 'next/link'

export default  function Navbar() {
  return (
    
        <Flex minWidth='max-content' align='center' justifyContent='center'>
            <Box>
                <Image />
                <Box fontSize={[16, 16, 18]}>Cleaning services</Box>
            </Box>
            <Spacer />
            <Box>
                <Flex>
                    <Link href='/'  px="2" fontSize={[16, 16, 18]}>Home</Link>
                    <Text px="3" fontSize={[16, 16, 18]}>Services</Text>
                    <Text px="3" fontSize={[16, 16, 18]}>About us</Text>
                    <Text px="3" fontSize={[16, 16, 18]}>Blog</Text>
                    <Text px="3" fontSize={[16, 16, 18]}>Contact</Text>
                </Flex>
            </Box>
            <Spacer />
            <Box>
                <Button mx='3' fontSize={[16, 16, 18]} size='sm'>search</Button>
                <Button fontSize={[16, 16, 18]} size='sm' >Log In</Button>
            </Box>
        </Flex>
  )
}