import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "UserName",
})

export default UserContext;