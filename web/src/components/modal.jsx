import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart, EditCart } from '../Redux/cart/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ModalComponent({ edit, id, onclose }) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const dispatch = useDispatch()
    const [data, setData] = useState({
        "img": "",
        "Name": "",
        "price": 0
    })
     
    useEffect(() => {
        if (edit) {
            axios.get(`https://taskpro-p.herokuapp.com/products/${id}`)
            .then((prod) => {
                console.log(prod.data)
                setData({
                    "img": prod.data.img,
                    "Name": prod.data.Name,
                    "price": prod.data.price
                })
            })
            .catch((err) => console.log(err))
        }
    },[])

    const handlechange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    console.log(data)
  
    return (
      <>
          <ModalOverlay />
          <ModalContent>
                <ModalHeader>{edit ? "Update Product" : "Add Products" }</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Enter Product name' value={data.Name} name="Name" onChange={handlechange} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Image URL</FormLabel>
                <Input placeholder='Enter Image URL' value={data.img} name="img" onChange={handlechange} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input ref={initialRef} placeholder='Enter Price' value={data.price} name="price" onChange={handlechange} />
              </FormControl>     
            </ModalBody>
  
            <ModalFooter>
                    {edit ? <Button colorScheme='blue' mr={3} onClick={() => {
                        dispatch(EditCart(id, data))
                        onclose()
                    }}
                    >
                update product
                    </Button> :
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            dispatch(AddToCart(data))
                            onclose()
                        }} >
              Add Product
            </Button>}
            </ModalFooter>
          </ModalContent> 
          <ToastContainer></ToastContainer>
      </>
    )
  }