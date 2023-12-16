import * as url from "url";

export default function SubscribeNewsletter() {
  return (
    <div className="container-fluid">
      <section
        className="py-4 py-xl-5"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <div className="container-fluid"> 
          <div
            className="text-white border rounded  border-light d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5"
            data-bs-theme="light"
            style={{
              backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2036914.jpg&f=1&nofb=1&ipt=c826eea699e8366216a490c808ccc27fcea9c15de2420a96c138e34035f7773d&ipo=images')"
              // background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,21,121,1) 35%, rgba(0,212,255,1) 100%)",
            }}
          >
            <div className="text-center text-lg-start py-3 py-lg-1">
              <h2 className="fw-bold mb-2">
                <strong>Subscribe to our newsletter</strong>
              </h2>
              <p className="mb-0">Imperdiet consectetur dolor.</p>
            </div>
            <form
              className="d-flex justify-content-center flex-wrap my-2"
              method="post"
            >
              <div className="my-2">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="my-2">
                <button className="btn btn-primary ms-sm-2" type="submit">
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
