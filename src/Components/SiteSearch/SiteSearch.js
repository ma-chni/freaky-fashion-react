import React from "react";
function SiteSearch() {
  return (
    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
      <ul className="navbar-nav flex-grow-1">
        <li>
          <form className="form-inline" action="/search">
            <input
              className="form-control mr-sm-2 search"
              type="search"
              name="q"
              placeholder="Sök produkt.."
              autoComplete="off"
            />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default SiteSearch;
