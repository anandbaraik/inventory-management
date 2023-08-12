import { createContext, useContext, useState, useEffect } from "react";
import { inventoryData } from "../assets/inventoryData";
import { json } from "react-router-dom";

const AppContext = createContext({
    inventory: [],
    departments: [],
    activeProductDepartment: ""
});

export const AppContextProvider = ({ children }) => {

    const [activeProductDepartment, setActiveProductDepartment] = useState("");
    const [departments, setDepartments] = useState(['Kitchen','Clothing', 'Toys']);
    const [inventory, setInventory] = useState(() => {
        const storedInventory = localStorage.getItem('inventory');
        return storedInventory ? JSON.parse(storedInventory) : inventoryData;
    });

    const addProduct = (data) => {
      const storedInventory = localStorage.getItem('inventory');
      const inventoryToBeUpdated = storedInventory ? JSON.parse(storedInventory) : inventory;
      const updatedInventory = [...inventoryToBeUpdated, data];
      localStorage.setItem('inventory', JSON.stringify(updatedInventory));
      setInventory(updatedInventory);
    }
  return (
    <AppContext.Provider
      value={{
        inventory,
        departments,
        activeProductDepartment,
        setActiveProductDepartment,
        addProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);