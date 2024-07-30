import { createContext } from "react";

export const SampleContext = createContext()

export const SampleProvider = ({ children }) => {
    const [number, setNumber] = useState(null)

    return <SampleContext.Provider value={{number, setNumber}}>
        {children}
    </SampleContext.Provider>
}

//const contextData = useContext(SampleContext)