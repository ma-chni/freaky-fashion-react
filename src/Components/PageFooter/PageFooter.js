import React from "react";
class PageFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4">
        <div id="footer-line"></div>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-12 mt-md-0 mt-3 text-center">
              <p className="d-inline p-2">
                <i className="fa fa-globe"></i>
                &nbsp;Gratis frakt och returer
              </p>
              <p className="d-inline p-5">
                <i className="fa fa-fighter-jet"></i>
                &nbsp;Expressfrakt
              </p>
              <p className="d-inline p-5">
                <i className="fa fa-credit-card"></i>
                &nbsp;Säkra betalningar
              </p>
              <p className="d-inline p-5">
                <i className="fa fa-heart"></i>
                &nbsp;Nyheter varje dag
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center" id="copyright-container">
          ©2020 FreakyFashion AB
        </div>
      </footer>
    );
  }
}

export default PageFooter;
