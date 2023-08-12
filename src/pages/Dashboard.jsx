import React from 'react'
import StatCard from '../components/StatCard'
import { Flex } from '@chakra-ui/react';
import {useApp} from "../context/AppContextProvider";
const Dashboard = () => {
  const {inventory} = useApp();

  const totalStocks = inventory.reduce((acc, curr) => {
    return acc + curr.stock;
  }, 0);

  const totalDelivered = inventory.reduce((acc, curr) => {
    return acc + curr.delivered;
  }, 0);

  const lowStockItems = inventory.reduce((acc, curr) => {
    return (curr.stock <= 10) ? acc + 1 : acc;
  }, 0);

  return (
    <Flex justifyContent={'space-around'} mt={5}>
        <StatCard stat={totalStocks} title="Total Stocks" color="green"></StatCard>
        <StatCard stat={totalDelivered} title="Total Delivered" color="yellow"></StatCard>
        <StatCard stat={lowStockItems} title="Low Stock Items" color="red"></StatCard>
    </Flex>
  )
}

export default Dashboard