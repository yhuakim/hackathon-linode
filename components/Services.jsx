import { Box, Heading, Text, Button,Container, Flex, Image, Spacer } from '@chakra-ui/react'
import Card from './Card';

const Services = () => {
    return (
        <Box 
        bgColor='gray.100'
        height='100vh'
        pb='70px'
        id='services'
        >
            <Container maxW='1200px'>
                <Text 
                textTransform='uppercase'
                pt={8}
                >Our Services</Text>

                <Flex 
                justify='space-between'
                >
                    <Heading>
                        Perfect cleanliness <br /> without effort!
                    </Heading>
                    <Flex 
                height='42px'
                align='center'
                shadow='md'
                bgColor='#fff'
                py={2}
                px={2}
                >
                    <Text 
                    px={4}
                    py={1.5} 
                    bgColor='#2f5830'
                    fontSize='12px'
                    fontWeight='500'
                    color='#fff'
                    borderRadius='2px'
                    >House</Text>
                    <Text
                    px={4}
                    py={1.5} 
                    fontSize='12px'
                    fontWeight='500'
                    >Business</Text>
                    </Flex>
                </Flex>
                
                <Flex direction={['column', 'column', 'row']} my={8} py={8}>
                    <Card variant='smooth' background='white' mr='10px'>  
                        <Image
                            src='/images/wc-icon.svg'
                            w='50px'
                            h='50px'
                            mt={5}
                        />
                        <Heading mt={4} maxW="145px" size='md' color='gray.700'>
                            Plumbing service
                        </Heading>
                        <Text maxW="250px" color='blackAlpha.700'>
                            You fill out an application on the site or contact us in a way convenient for you (phone, e-mail, or instant messenger)
                        </Text>
                        <Button>
                            Learn More
                        </Button>
                    </Card>
                    
                    <Card variant='smooth' >  
                        <Image
                            src='/images/wn-icon.svg'
                            w='50px'
                            h='50px'
                            mt={5}
                        />
                        <Heading mt={4} maxW="145px" size='md' color='gray.700'>
                            Office space washing
                        </Heading>
                        <Text maxW="250px" color='blackAlpha.700'>
                        You fill out an application on the site or contact us in a way convenient for you (phone, e-mail, or instant messenger)
                        </Text>
                    </Card>

                    <Card variant='smooth' >  
                        <Image
                            src='/images/vacum-icon.svg'
                            w='50px'
                            h='50px'
                            mt={5}
                        />
                        <Heading mt={4} maxW="145px" size='md' color='gray.700'>
                            Maintenance Cleaning
                        </Heading>
                        <Text maxW="250px" color='blackAlpha.700'>
                        You fill out an application on the site or contact us in a way convenient for you (phone, e-mail, or instant messenger)
                        </Text>
                    </Card>
                    
                    <Card variant='smooth' >  
                        <Image
                            src='/images/wb-icon.svg'
                            w='50px'
                            h='50px'
                            mt={5}
                        />
                        <Heading mt={3} maxW="145px" size='md' color='gray.700'>
                            Commercial Cleaning
                        </Heading>
                        <Text maxW="250px" color='blackAlpha.700'>
                        You fill out an application on the site or contact us in a way convenient for you (phone, e-mail, or instant messenger)
                        </Text>
                    </Card>
                </Flex>
            </Container>
        </Box>
    )
    
};

export default Services