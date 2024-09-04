import { useState } from "react";
import userContext from "./userContext";

function UserProvider({ children }) {
  const [userObject, setUserObject] = useState(null);
  const values = { userObject, setUserObject };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}

export default UserProvider;
