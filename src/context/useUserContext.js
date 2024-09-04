import { useContext } from "react";
import userContext from "./userContext";

function useUserContext() {
  const context = useContext(userContext);

  return context;
}

export default useUserContext;
