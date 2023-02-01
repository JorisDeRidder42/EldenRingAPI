import { createContext } from "react";

const PageContext = createContext({
    page: 0,
    setPage : (number) => {
    }
})

export default PageContext;