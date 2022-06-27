import { Box, Heading, Stack, Text, Button, Container, Image, Flex, Spacer,Link  } from '@chakra-ui/react'
import NextLink from 'next/link'

export default  function Navbar() {
  return (
    
        <Flex minWidth='max-content' align='center' justifyContent='center' pt='3'>
            <Box>
                <Image />
                <Box fontSize={[16, 16, 18]}>Cleaning services</Box>
            </Box>
            <Spacer />
            <Box>
                <Flex>
                    <NextLink href='/' passHref>
                        <Link  
                        px="2" 
                        fontSize={[16, 16, 18]}
                        
                        >Home</Link>
                    </NextLink>
                    <NextLink href='#services' passHref>
                        <Link  px="2" fontSize={[16, 16, 18]}>Services</Link>
                    </NextLink>
                    <NextLink href='#about' passHref>
                        <Link  px="2" fontSize={[16, 16, 18]}>About us</Link>
                    </NextLink>
                    <NextLink href='/blog' passHref>
                        <Link  px="2" fontSize={[16, 16, 18]}>Blog</Link>
                    </NextLink>
                    <NextLink href='#contact' passHref>
                        <Link  px="2" fontSize={[16, 16, 18]}>Contact</Link>
                    </NextLink>
                </Flex>
            </Box>
            <Spacer />
            <Box>
                <Button 
                mx='3' 
                borderRadius='0'
                variant='outline' 
                fontSize={[16, 16, 18]} 
                size='sm' 
                color='white'
                _hover={{color: '#2e6830', backgroundColor: '#fcd842'}}
                >Sign Up</Button>

                <Button 
                borderRadius='0' 
                variant='solid'
                backgroundColor= '#fcd842' 
                fontSize={[16, 16, 18]} 
                size='sm' 
                color='white'
                _hover={{color: '#2e6830', variant: 'outline'}}
                >Log In</Button>
            </Box>
        </Flex>
  )
}