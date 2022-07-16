import React from "react";
import { useNavigate } from "react-router-dom";
export const Updatecontext = React.createContext();
export function UpdatecontextProvider({ children }) {
  const Navigate = useNavigate();
  const [updateData, SetUpdateData] = React.useState([]);
  const handleUpdateData = (data) => {
    SetUpdateData(data);
    Navigate("/edit");
  };
  return (
    <Updatecontext.Provider value={{ updateData, handleUpdateData }}>
      {children}
    </Updatecontext.Provider>
  );
}
