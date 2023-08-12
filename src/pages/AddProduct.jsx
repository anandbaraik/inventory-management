import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { v4 as uuidv4 } from "uuid";
  import { useApp } from "../context/AppContextProvider";
  import { useNavigate } from "react-router-dom";

  const productState = {
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };

  const AddProduct = () => {
    const [product, setProduct] = useState(productState);
    const { addProduct } = useApp();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      addProduct({
        ...product,
        price: +product.price,
        stock: +product.stock,
        id: uuidv4(),
      });
      navigate("/products");
    };

    const handleInputs = (e) => {
      setProduct((product) => ({
        ...product,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <Flex flexDir="column" gap={8} flexGrow={1} p={4} overflowY="auto">
        <Heading fontSize="1.5rem">Add New Product</Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap={4} w="50%" fontSize="0.8rem">
            <FormControl isRequired>
              <FormLabel>Department: </FormLabel>
              <Select
                w="full"
                name="department"
                placeholder="Select Department"
                value={product.department}
                onChange={handleInputs}
              >
                <option value="Kitchen">Kitchen</option>
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" onChange={handleInputs} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={product.description}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>SKU</FormLabel>
              <Input
                type="text"
                name="sku"
                value={product.sku}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Supplier</FormLabel>
              <Input
                type="text"
                name="supplier"
                value={product.supplier}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Delivered</FormLabel>
              <Input
                type="number"
                name="delivered"
                value={product.delivered}
                onChange={handleInputs}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="imageUrl"
                value={product.imageUrl}
                onChange={handleInputs}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" alignSelf="start">
              Add Product
            </Button>
          </Flex>
        </form>
      </Flex>
    );
  };

  export default AddProduct;