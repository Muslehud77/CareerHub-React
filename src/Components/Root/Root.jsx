
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@uidotdev/usehooks';

export const DarkModeContext = createContext(false)



const Root = () => {
    const [dark,setDark] = useLocalStorage('dark', false);
    useEffect(() => {
      document
        .querySelector("html")
        .setAttribute("data-theme", `${dark ? "mytheme" : "light"}`);
    }, [dark]);
    const handleDark = () => {
        setDark(!dark)
         
    }   
    return (
      <DarkModeContext.Provider value={dark}>
        <div>
         
            <Header handleDark={handleDark}></Header>
            <Outlet></Outlet>
         
          <Footer></Footer>
        </div>
      </DarkModeContext.Provider>
    );
};

export default Root;