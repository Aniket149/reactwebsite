import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <section className="py-4 bg-primary text-center">
        <h2 className="text-white">Contact us</h2>
      </section>
      <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2124286632506!2d72.83246561399035!3d18.921989161714514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1633228866371!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            title="gate of India"
                        ></iframe>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body py-4">
                              <h4>Send your Idea</h4>
                              <div className="subunderline mb-3"></div>
                               <form>
                                  <label for="">Name</label>
                                  <input type="text" placeholder="Enter your Name" className="form-control mb-3"/>
                                  <label for="">Email</label>
                                  <input type="text" placeholder="Enter your Email" className="form-control mb-3"/>
                                  <label for="">Message</label>
                                  <textarea rows="3" className="form-control mb-3"></textarea>
                                  <button className="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  );
}

export default Contact;
