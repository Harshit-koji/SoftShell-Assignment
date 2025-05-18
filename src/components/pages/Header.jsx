
import "../../styleComp/Header.scss";
import { HeroComp } from "../layout/HeroComp";
import { NavComp } from "../layout/NavComp";








export const Header = () => {

    return (<>
        <header className="bg-header-background my-2 py-2 d-flex  flex-column " >
            <NavComp />
            <HeroComp />
        </header>

    </>)
}