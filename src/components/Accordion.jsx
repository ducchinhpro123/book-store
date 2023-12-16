// import brick_png from "../../assets/img/bg_brick.jpg";
import brick_png from "/assets/img/bg_brick.jpg";
import {slides} from "../json/Slide";


export default function Accordion() {
  return (
      <div
          className="row d-flex justify-content-around"
          style={{
            background: `url(${brick_png})`,
            // paddingLeft: 26,
            // paddingRight: 26,
          }}
      >
        <div className="col-xl-3 d-xl-flex flex-column justify-content-xl-center ">
          <h2 style={{fontSize: '24px', color: "#091579", fontWeight: "bold"}}>
            CHOOSE YOUR BRAIN FOOD
          </h2>
          <h2 className="fw-bolder" style={{fontSize: '24px', marginBottom: 30, color: "#091579"}}>
            SALES UP TO 70% OFF
          </h2>
          <div>
            <button
                className="btn btn-primary"
                type="button"
                style={{
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)',
                  fontWeight: "bold"
                }}
            >
              Learn more
            </button>
            <button
                className="btn btn-primary"
                type="button"
                style={{
                  marginLeft: 15,
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)',
                  fontWeight: "bold",
                }}
            >
              Shop now
            </button>
          </div>
        </div>
        <div className="col m-3 col-lg-7 col-md-10">
          <section id="carousel">
            <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="bg-light border rounded border-light hero-nature carousel-hero jumbotron py-5 px-4">
                    <blockquote className="p-4 text-lg backdrop-blur rounded-lg shadow">
                      <p className="mb-4 italic">“Reading books doesn't make you smarter. Reading smart books makes you
                        smarter. Reading dumb books makes you dumber.”</p>
                      <p className="text-sm"> - Oliver Markus Malloy, Inside The Mind of an Introvert</p>
                    </blockquote>
                    <p className={'mt-2'}><a className="btn btn-primary hero-button plat" role="button" href="#">Learn
                      more</a></p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                      className="bg-light border rounded border-light hero-photography carousel-hero jumbotron py-5 px-4">
                    <blockquote className="p-4 text-lg backdrop-blur rounded-lg shadow">
                      <p className="mb-4 italic">“Nobody has ever killed themselves over a broken arm. But every day,
                        thousands of people kill themselves because of a broken heart. Why? Because emotional pain hurts
                        much worse than physical pain.”</p>
                      <p className="text-sm"> - Oliver Markus Malloy, Bad Choices Make Good Stories (Omnibus): How The
                        Great American Opioid Epidemic of The 21st Century Began - a Memoir</p>
                    </blockquote>
                    <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div
                      className="bg-light border rounded border-light hero-technology carousel-hero jumbotron py-5 px-4">
                    <blockquote className="p-4 text-lg backdrop-blur rounded-lg shadow">
                      <p className="mb-4 italic">“Social media is to socializing what masturbating is to sex.”</p>
                      <p className="text-sm"> - Oliver Markus Malloy, Inside The Mind of an Introvert</p>
                    </blockquote>
                    <p><a className="btn btn-primary hero-button plat" role="button" href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span
                  className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a
                  className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span
                  className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button>
                <button className="active" type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
