import React from "react";
import Footer from "./Footer";
import Vision from "./Vision";

function About() {
  return (
    <div>
      <section className="py-4 bg-primary text-center">
            <h2 className="text-white">About Us</h2>
      </section>
      <section className="py-5">
          <div className="container">
              <div className="row">
                 <div className="col-md-12">
                     <h3> About Our Company</h3>
                     <div className="underline mb-3"></div>
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                         necessitatibus illum, quia, nam voluptas debitis ab odio
                         officiis accusamus aut et ipsam assumenda. Vitae, deleniti?
                        </p>
                       <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                          deleniti dolores adipisci, repellat eum obcaecati aspernatur
                          cupiditate saepe earum corporis vitae dolore exercitationem.
                          Ducimus, distinctio?
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Vision/>
        <Footer/>
    </div>
  );
}

export default About;
