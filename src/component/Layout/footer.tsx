import React from "react";

const AppFooter = () => {
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="terms-and-conditions" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="responsible-gaming" target="_blank" rel="noopener noreferrer">
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="support-detail">
          <h2>24X7 Support</h2>
          <p></p>
        </div>
        <div className="social-icons-box"></div>
      </div>
    </section>
  );
};

export default AppFooter;
