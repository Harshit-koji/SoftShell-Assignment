
import { useThemeStore } from "../../store/themeStore";





export const NavComp = () => {
    const mode = useThemeStore(state => state.mode);
  const toggleMode = useThemeStore(state => state.toggleMode);


  return (
      <nav className="navbar navbar-expand-lg ">
  <div className="container d-flex justify-content-between align-items-center">
    {/* Brand name/logo */}
    <a className="navbar-brand theme-text" href="#">SoftShell</a>

    {/* Hamburger icon for small screens */}
    <button
      className="navbar-toggler order-last"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="bi bi-list theme-text fs-2"></i>
    </button>

    {/* This wraps the nav items. We will display them in a row, even when collapsed. */}
    <div
      className="collapse navbar-collapse  justify-content-center order-last order-lg-2"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav flex-lg-row pt-2 pt-md-0 flex-column  gap-3  align-items-center" onClick={(e)=>e.preventDefault()}>
        {/* Each nav item */}
        <li className="nav-item">
          <a className="nav-link theme-text" href="#">How it works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link theme-text" href="#">Why choose us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link theme-text" href="#">Customer testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link theme-text" href="#">Contact</a>
        </li>
      </ul>
    </div>

    {/* This div is your custom right section like a button, theme toggle etc. */}
    <div className="theme-text  order-lg-last  d-inline-block  p-2 "  onClick={toggleMode} style={{cursor:"pointer"}}>
      {mode?<i className="bi bi-brightness-high-fill theme-text fs-5"></i>:<i className="bi bi-moon-stars-fill fs-5"></i>}
      
      
    </div>
  </div>
</nav>

  )
}