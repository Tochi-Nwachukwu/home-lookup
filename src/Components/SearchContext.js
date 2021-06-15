import react, {useState, createContext} from 'react'

export const SearchContext = createContext();


export const searchProvider = (props)=>{

   return(
       <SearchContext.Provider>
           {props.children}
       </SearchContext.Provider>
   );
}