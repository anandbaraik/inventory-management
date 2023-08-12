import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Flex } from '@chakra-ui/react'
const StatCard = ({title, stat, color}) => {
  return (
    <Card>
        <CardBody >
            <Flex justifyContent={'center'} flexDir={'column'}>
                <Text color={color}>
                    {stat}
                </Text>
                <Text>
                    {title}
                </Text>
            </Flex>
        </CardBody>
    </Card>
  )
}

export default StatCard