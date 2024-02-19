import { useContext, createContext, useState} from "react";
import solutionsData from "../data/solutionsData";

const SolutionContext = createContext();

export const useSolution = () => useContext(SolutionContext);
export const SolutionProvider = ({ children }) => {
    const [solutionKey, setSolutionKey] = useState('hr'); //default solution
    const [solution, setSolution] = useState(solutionsData);    

    return (
        <SolutionContext.Provider value={{ solutionKey, setSolutionKey, solution }}>
            {children}
        </SolutionContext.Provider>
    );
};

