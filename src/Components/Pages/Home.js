import React from "react";
import Footer from "./Footer";
import Slider from "./Slider";
import Vision from "./Vision";

function Home() {
  return (
    <div>
      <Slider />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Our Company</h3>
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
      <Vision />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Our Services</h3>
              <div className="underline mb-3"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h6>Web Designing</h6>
                  <div className="mb-3 subunderline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore repellendus dignissimos accusantium magni
                    voluptatem, voluptas voluptatibus iusto distinctio rerum
                    rem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h6>Development</h6>
                  <div className="mb-3 subunderline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore repellendus dignissimos accusantium magni
                    voluptatem, voluptas voluptatibus iusto distinctio rerum
                    rem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h6>SEO</h6>
                  <div className="mb-3 subunderline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore repellendus dignissimos accusantium magni
                    voluptatem, voluptas voluptatibus iusto distinctio rerum
                    rem.
                  </p>
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

export default Home;
