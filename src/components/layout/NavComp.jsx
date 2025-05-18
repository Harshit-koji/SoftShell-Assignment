




export const NavComp = () => {

  return (
      <nav className="navbar navbar-expand-lg ">
  <div className="container d-flex justify-content-between align-items-center">
    {/* Brand name/logo */}
    <a className="navbar-brand text-white" href="#">SoftShell</a>

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
      <i className="bi bi-list text-white fs-2"></i>
    </button>

    {/* This wraps the nav items. We will display them in a row, even when collapsed. */}
    <div
      className="collapse navbar-collapse justify-content-center order-last order-lg-2"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav flex-lg-row flex-column gap-3  align-items-center">
        {/* Each nav item */}
        <li className="nav-item">
          <a className="nav-link text-white" href="#">How it works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Why choose us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Customer testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
    </div>

    {/* This div is your custom right section like a button, theme toggle etc. */}
    <div className="text-white ms-3 order-lg-last">Toggle</div>
  </div>
</nav>

  )
}