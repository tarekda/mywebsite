import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <form className="contactForm">
            <div className="row">
              <h2>Sign up</h2>
            </div>
            <div className="row">
              <div className="twelve columns collapsed">
                <div className="six columns">
                  <div className="form-group ">
                    <input type="text" className="form-control iteminput" name="name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control iteminput" name="email" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control iteminput"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="six columns">
                  <div className="form-group">
                    <input
                      type="textArea"
                      className="form-control iteminput"
                      name="message"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="twelve columns">
              <button type="submit" className="btn btn-primary submit">
                Sign up
              </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in : {resumeData.linkedinId}</h4>
            </div>
          </aside>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Mobile : {resumeData.mobileNumber}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
