import React, { useState } from 'react'
import { useApp } from '../context/AppContextProvider'
import ProductsTable from '../components/ProductsTable';
import { Flex, Select, Text, Checkbox, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Products = () => {

	const navigate = useNavigate();
  const {activeProductDepartment, inventory, departments} = useApp();

  const [filterBy, setFilterBy] = useState({
    department: activeProductDepartment || "",
    lowStock: false,
    sortBy: "name"
  });

  const handleFilter = (value, name) => {
    setFilterBy((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  let filteredData = inventory?.filter((product) => {
				if(
					(
						(filterBy.department.trim().length > 0) &&
						(product.department === filterBy.department)
					) || (
						filterBy.department.trim().length == 0
					)
				) {
					return true;
				}
			})?.filter((product) => {
				return filterBy.lowStock ? filterBy.lowStock && (product.stock <= 10) : true;
			})

	if(filterBy.sortBy == 'price') {
		filteredData = [...filteredData]?.sort((a, b) => a?.price - b?.price);
	} else if(filterBy.sortBy == 'stock') {
		filteredData = [...filteredData]?.sort((a, b) => a?.stock - b?.stock);
	} else {
		filteredData = [...filteredData]?.sort((a, b) => a.name.localeCompare(b.name));
	}
  return (
    <Flex m={5} flexDir={'column'}>
      <Flex mb={5} mt={5} flexDir={'row'} justifyContent={'space-around'} alignItems={'center'} gap={2}>
        <Text>
            Products
        </Text>
        <Flex maxW={'400px'}>
          <Select placeholder='All departments' value={filterBy.department}
            onChange={(e) => handleFilter(e.target.value, 'department')}>
            {
              departments?.map((department) => {
                return (<option key={department} value={department}>{department}</option>)
              })
            }
          </Select>
        </Flex>
        <Flex maxW={'400px'}>
          <Checkbox checked={filterBy.lowStock}
            onChange={(e) => handleFilter(e.target.checked, 'lowStock')}>
              Low Stock Items
            </Checkbox>
          </Flex>
        <Flex w={'200px'}>
          <Select placeholder='Sort By' value={filterBy.sortBy}
            onChange={(e) => handleFilter(e.target.value, 'sortBy')}>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="stock">Stock</option>
          </Select>
        </Flex>
        <Button colorScheme='blue' onClick={() => navigate('/add-product')}>New</Button>
      </Flex>
      <Flex>
        <ProductsTable filteredData={filteredData}/>
      </Flex>
    </Flex>
  )
}

export default Products
