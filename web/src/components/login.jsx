import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { auth } from '../api/firebase';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {useDispatch, useSelector} from "react-redux"
import { authSuccess } from '../Redux/auth/action';
  
export function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email, password)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password);
            dispatch(authSuccess(email))
            alert("login successfully")
            navigate("/dashboard")
        } catch(err) {
            console.log(err.message)
            alert(err.message)
        }
    }

    

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link to="" color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/register">Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit} >
                  Sign in
                </Button>
                <Link to="/register" style={{ textDecoration: 'none' }} >
                  <Button
                  w={"full"} 
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} >
                  Sign up
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }