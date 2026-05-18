const { createContext, useState, useContext } = require("react");


const ThemeContext=createContext(null);

 export function ThemeProvider({child}){
  const[theme,setTheme]=useState("light");

  function toggleTheme(){
    setTheme(theme==="light"?"dark":"light");
  }

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {child}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context=useContext(ThemeContext);
    if(!context){
      throw new Error("useTheme must be used inside a <ThemeProvider>")
    }
    return context;
}

