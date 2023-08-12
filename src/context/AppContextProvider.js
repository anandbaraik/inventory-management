import { createContext, useContext, useState, useEffect } from "react";
import { inventoryData } from "../assets/inventoryData";

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

  return (
    <AppContext.Provider
      value={{
        inventory,
        departments,
        activeProductDepartment,
        setActiveProductDepartment
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);