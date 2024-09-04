import { createContext } from "react";

const userContext = createContext({
  userObject: null,
  setUserObject: () => null,
});

export default userContext;
