
import { Link } from "react-scroll";
import { useThemeStore } from "../../store/themeStore";





export const NavComp = () => {
    const mode = useThemeStore(state => state.mode);
  const toggleMode = useThemeStore(state => state.toggleMode);


  return (
      <nav className="navbar navbar-expand-lg ">
  <div className="container d-flex justify-content-between align-items-center">
    {/* Brand name/logo */}
    <a className="navbar-brand theme-text fs-4 " onClick={(e)=>e.preventDefault()} href="#"><i class="bi bi-tags-fill text-primary"></i> SoftShell</a>

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
      <ul className="navbar-nav flex-lg-row pt-2 pt-md-0 flex-column gap-3 align-items-center" onClick={(e) => e.preventDefault()}>
  <li className="nav-item">
    <Link
      to="how-it-works"
      smooth={true}
      duration={100}
      className="nav-link theme-text"
    >
      How it works
    </Link>
  </li>
  <li className="nav-item">
    <Link
      to="why-choose-us"
      smooth={true}
      duration={100}
      className="nav-link theme-text"
    >
      Why choose us
    </Link>
  </li>
  <li className="nav-item">
    <Link
      to="testimonials"
      smooth={true}
      duration={100}
      className="nav-link theme-text"
    >
      Customer testimonials
    </Link>
  </li>
  <li className="nav-item">
    <Link
    cursor="pointer"
      to="contact"
      smooth={true}
      duration={100}
      className="btn btn-primary"
    >
      Contact Us
    </Link>
  </li>
</ul>

    </div>

    {/* This div is your custom right section like a button, theme toggle etc. */}
    <div className="theme-text  order-lg-last  d-inline-block  p-2 "  onClick={toggleMode} style={{cursor:"pointer"}}>
      {mode?<i className="bi bi-moon-stars-fill fs-5"></i>:<i className="bi bi-brightness-high-fill theme-text fs-5"></i>}
      
      
    </div>
  </div>
</nav>

  )
}