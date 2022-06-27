import Head from 'next/head'
import { Box, Heading, Text, Button, HStack, Container, Flex, Center, Spacer } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

export default function Hero() {
  return (
    <Box  
    bgImage="url('/images/hero-v2@2x.png') !important"
    bgPosition='center'
    bgSize={['500px 500px', 'cover', 'cover']}
    bgRepeat='no-repeat'
    >
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Container 
      maxW='1200px'>
        <Flex 
        direction='column'>
        <Box>
          <Navbar/>
        </Box>
        <Spacer/>
        <Flex 
        height='100vh'
        direction='column'
        pt={6}
        >
          <Box py={4} >
          <Heading 
          width='450px' 
          letterSpacing='2px' 
          lineHeight='1.3'
          fontWeight='600'
          >
            <Box 
            as='span' 
            fontWeight='400' 
            fontSize={[30, 35, 60]}>Professional</Box> <br />
            cleaning services <br /> 
            in <Box 
            as='span' 
            color='#2e6830' 
            letterSpacing='0'
            >
              Enugu
            </Box>
          </Heading>
          </Box>
          <Box 
          py={3}>
            <Text fontSize={27}>While you are doing something important, we will <br /> put things in order in the apartment, private <br /> house or office</Text>
          </Box>
          <HStack spacing='30px' py={5}>
          <Box>
            <Button 
            px={6}
            borderRadius='0'
            backgroundColor='#116d2b'
            color='#fff'
            fontWeight='400'
            fontSize='16px'
            _hover={{backgroundColor: '#116d21', padding: '0 30px', transition: '20ms ease-in-out' }}
            >
              call Us Today</Button>
          </Box>
          <Box>
            <Button 
            borderRadius='0'
            px={4}>Call Us Today</Button>
          </Box>
          </HStack>
        </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
