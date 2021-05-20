import React from "react";
import Logo from "../../logo.png";
import SiteSearch from "../SiteSearch/SiteSearch";
class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <div className="col">
              <a className="navbar-brand" href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="float-left"
                  width="100"
                  height="100"
                />
              </a>
              <ul className="navbar-nav flex-grow-1 mb-4 mt-0">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/categories/tröjor">
                    Tröjor&nbsp;&nbsp;|
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/categories/rea">
                    Rea&nbsp;&nbsp;|
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark"
                    href="/categories/klänningar"
                  >
                    Klänningar&nbsp;&nbsp;|
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/categories/byxor">
                    Byxor&nbsp;&nbsp;|
                  </a>
                </li>
              </ul>
            </div>
            <SiteSearch />
          </div>
        </nav>
      </header>
    );
  }
}

export default PageHeader;
