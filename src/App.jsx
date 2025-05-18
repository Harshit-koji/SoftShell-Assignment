import { Footer } from "./components/pages/Footer"
import { Header } from "./components/pages/Header"
import { MainInfo } from "./components/pages/MainInfo"








export const App = ()=>{


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