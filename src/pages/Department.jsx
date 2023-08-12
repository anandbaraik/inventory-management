import React from 'react'
import { useApp } from '../context/AppContextProvider'
import { Card, CardHeader, CardBody, CardFooter, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Department = () => {
  const {departments, setActiveProductDepartment} = useApp();
  return (
    <Flex justifyContent={'space-around'} mt={5}>
      {
        departments?.map((department) => {
          return (
            <Link to={'/products'} key={department}>
                <Card onClick={() => setActiveProductDepartment(department)}>
                  <CardBody >
                      <Flex justifyContent={'center'} flexDir={'column'}>
                          <Text>
                              {department}
                          </Text>
                      </Flex>
                  </CardBody>
              </Card>
            </Link>
          )
        })
      }
    </Flex>
  )
}

export default Department