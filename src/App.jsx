import { useEffect } from "react";
import { Footer } from "./components/pages/Footer"
import { Header } from "./components/pages/Header"
import { MainInfo } from "./components/pages/MainInfo"
import { useThemeStore } from "./store/themeStore";








export const App = ()=>{
const {mode} = useThemeStore();

useEffect(()=>{
    document.body.className = mode? "light-theme" : "dark-theme" ;
},[mode]);
    return(
        <>
        <div className="container">
        <Header/>
        <MainInfo/>
        <Footer/>
        </div>
        
        </>
    )
}