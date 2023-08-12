import { Flex } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Image
  } from '@chakra-ui/react'
import React from 'react'
const ProductsTable = ({filteredData}) => {
  return (
    <Flex m={2}>
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                    <Tr >
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Price</Th>
                    <Th>Stock</Th>
                    <Th>Supplier</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((product) => (
                    <Tr key={product.id} className="border-b text-center">
                        <Td >
                            <Image src={product.imageUrl} alt={product.name} w='150px'/>
                        </Td>
                        <Td>{product.name}</Td>
                        <Td maxW={'400px'} whiteSpace={'normal'}>{product.description}</Td>
                        <Td>${product.price}</Td>
                        <Td>{product.stock}</Td>
                        <Td>{product.supplier}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </Flex>
  )
}

export default ProductsTable