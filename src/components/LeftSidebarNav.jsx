import React from 'react';
import {Button,Flex,useColorModeValue,Link as ChakraLink,Avatar,Text,Heading,IconButton,useDisclosure} from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
const LeftSidebarNav = () => {
  return (
    <Flex
      h="full"
      p={{ base: 2, lg: 4 }}
      flexDir={{ base: 'row', lg: 'column' }}
      borderRightWidth={{ base: '0', lg: '1px' }}
      borderTopWidth={{ base: '1px', lg: '0' }}
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      justifyContent="space-between"
      position="relative"
    >
      <Flex
        flexDir={{ base: 'row', lg: 'column' }}
        gap={{ base: 2, lg: 4 }}
        fontSize={{ base: '1.7em', lg: '1.2rem' }}
        alignItems={{ base: 'center', lg: 'stretch' }}
        justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        flexGrow={1}
      >
        <ChakraLink
          as={NavLink}
          to="/"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
			transition: 'none',
			fontWeight: 'bold',
			color: 'blue.400',
		  }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M13.45 11.55l2.05 -2.05" />
			<path d="M6.4 20a9 9 0 1 1 11.2 0z" />
			</svg>
            <Text display={{ base: 'none', lg: 'block' }}>Dashboard</Text>
          </Flex>
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/departments"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
          _activeLink={{
			transition: 'none',
			fontWeight: 'bold',
			color: 'blue.400',
		  }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
		  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-campaignmonitor" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" />
		</svg>
            <Text display={{ base: 'none', lg: 'block' }}>Departments</Text>
          </Flex>
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/products"
          borderRadius={{ base: 'full', lg: 'md' }}
          p={2}
		  _activeLink={{
			transition: 'none',
			fontWeight: 'bold',
			color: 'blue.400',
		  }}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            textDecoration: 'none',
          }}
          order={{ base: 3, lg: 0 }}
        >
          <Flex alignItems="center" gap={2} transition="all 0.1s linear">
		  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
			<path d="M3 21l18 0" />
			<path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
			<path d="M5 21l0 -10.15" />
			<path d="M19 21l0 -10.15" />
			<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
			</svg>
            <Text display={{ base: 'none', lg: 'block' }}>Products</Text>
          </Flex>
        </ChakraLink>
    </Flex>
	</Flex>
  )
}

export default LeftSidebarNav;