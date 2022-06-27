import { Box, Heading, Text, Button,Container, Flex, Image, Spacer } from '@chakra-ui/react'

const About =()=> {

    return (
        <Box
        h='100vh'
        >
            <Box>About Us</Box>
            <Box
            h='100%'
            bgImage='url(/images/about.png) !important'
            bgPosition='center'
            bgSize='cover'
            bgRepeat='no-repeat'
            ></Box>
        </Box>
    )
}

export default About