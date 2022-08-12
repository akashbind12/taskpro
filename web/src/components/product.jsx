import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export function Product({ props, onClick, onclick, setEdit,setId}) {
   
    
    return (
      <Center py={12}  >
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'100%'}
         
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${props.img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {props.Name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {props.price}
              </Text>
           
            </Stack>
          </Stack>
          
          <Stack mt={8} direction={'row'} spacing={4}>
          <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={() => {
                onclick()
                setEdit(true)
                setId(props._id)
              }}
            >
            Edit
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}  
            onClick={onClick}
             >
            Delete
          </Button>
        </Stack>
        </Box>
        {/* <ToastContainer></ToastContainer> */}
      </Center>
      
    );
  }