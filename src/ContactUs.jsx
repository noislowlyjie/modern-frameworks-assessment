import React from 'react';

function ContactUs() {
  return (
    <main className="about-page py-5">
      <div className="container">
        <section className="about-hero text-center mb-5">
          <h1 className="about-title mb-3">Contact Us</h1>
          <p className="about-subtitle mx-auto mb-0">
            Got a question, need help with a product, or just want to talk kopi?</p>
            <p>Don't be shy, just reach out.</p>
          
        </section>
        <section className="about-content card border-0 shadow-sm mb-4">
          <div className="card-body p-4 p-md-5">

            <h5>Email</h5>
            <p>Email us at <b>hello@kopispace.sg.</b><br/>
            We reply quite fast one, don't worry.</p>
            <h5>WhatsApp</h5>
            <p>WhatsApp us at <b>+65 9123 4567</b> for quick answers.</p>
            <h5>Location</h5>
            <p>We are based in Singapore. Online shop for now, no physical store yet.</p>
          </div>
        </section>

        <section className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>Email</h2>
              <p>hello@kopispace.sg</p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>WhatsApp</h2>
              <p>+65 9123 4567</p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>Location</h2>
              <p>Singapore (online only)</p>
            </article>
          </div>
        </section>

        <section className="about-signoff text-center">
          <p className="mb-1">Got feedback or anything not shiok? Tell us straight.</p>
          <p className="about-tagline mb-0">We are always ready to lim kopi and chat.</p>
        </section>
      </div>
    </main>
  );
}

export default ContactUs;