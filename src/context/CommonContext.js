import {createContext, useState} from "react";

export const CommonContext = createContext();

export const CommonContextProvider = ( props ) => {

    const [selectedCategory, setSelectedCategory] = useState(0);

    return(
        <CommonContext.Provider
            value={{
                selectedCategory, setSelectedCategory,
            }}>

            { props.children }

        </CommonContext.Provider>
    )
}