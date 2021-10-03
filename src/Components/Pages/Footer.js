import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Info</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ducimus quis modi distinctio nemo consequatur ex, nulla
              perspiciatis incidunt, architecto corrupti cum. Minus, blanditiis
              necessitatibus.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Link</h6>
            <hr />
            <div>
              <Link to="/" className="text-decoration-none text-white">Home</Link>
            </div>
            <div>
              <Link to="/about" className="text-decoration-none text-white">About</Link>
            </div>
            <div>
              <Link to="/contact" className="text-decoration-none text-white">Contact us</Link>
            </div>
            <div>
              <Link to="/" className="text-decoration-none text-white">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Info</h6>
            <hr/>
            <div>
              <p>MG Road, Mumbai</p>
            </div>
            <div>
              <p>1234567890</p>
            </div>
            <div>
              <p>0987654321</p>
            </div>
            <div>
              <p>mywebsite@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
