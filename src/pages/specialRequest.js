import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SpecialRequest extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <div className="site-specialRequest">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-center mt-5">Have a Custom Request?</h1>
                <h3 className="text-center">
                  Send me an email at{" "}
                  <a href="mailto:skylergalatro@gmail.com">
                    skylergalatro@gmail.com
                  </a>{" "}
                  with your picture attached and I'll get back to you as soon as
                  I can!
                </h3>
                <hr />
                <h3 className="text-center">
                  Here are some past requests I've painted:
                </h3>

                <div className="row">
                  <div className="col-md-4">
                    <img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                  </div>
                  <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
                  </div>
                  <div className="col-md-4">
                    <img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SpecialRequest
