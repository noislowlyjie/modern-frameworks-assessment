import React from 'react';

function AboutUs() {
  return (
    <main className="about-page py-5">
      <div className="container">
        <section className="about-hero text-center mb-5">
      
          <h1 className="about-title mb-3">Our Story</h1>
          <p className="about-subtitle mx-auto mb-0">
            At Kopi Space, we are about one thing: good kopi, no nonsense.
          </p>
        </section>

        <section className="about-content card border-0 shadow-sm mb-4">
          <div className="card-body p-4 p-md-5">
            <p>
              People always say, "eh, go lim kopi". It means go drink coffee,
              chill, catch up, and talk story.
            </p>
            <p>
              But for us, Lim Kopi is also our boss name. Yah lah, coincidence or fate, we also dunno.
            </p>
            <p>
              Boss Lim Kopi started this place with one simple idea: kopi no need so complicated.
            </p>
            <p>
              Uncle Lim, or Kopi Sir (as we like to call our Boss), no believe in the "pattern more than badminton" style.
            </p>
            <p>
              He always say: No need atas pattern, no need fancy talk.
            </p>
            <p>
              Just solid kopi stuff that works: beans, mugs, tools, and all the everyday essentials.
            </p>
            <p>
              Whether you every day must lim kopi to function, or you are just starting your kopi journey, we got you covered.
            </p>
            <p>
              Come here, no stress, no need blur, just pick what you need and lim your kopi.
            </p>
          </div>
        </section>

        <section className="row g-3 mb-4">
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>Simple - No need confuse</h2>
              <p>Clear picks, clear prices, no confusion.</p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>Solid - No play play</h2>
              <p>We also use these products ourselves.</p>
            </article>
          </div>
          <div className="col-12 col-md-4">
            <article className="about-pill h-100">
              <h2>Steady - No need stress</h2>
              <p>We are here to help.</p>
            </article>
          </div>
        </section>

        <section className="about-signoff text-center">
          <p className="mb-1">Next time someone asks, "want to lim kopi?"</p>
          <p className="about-tagline mb-0">Just say, "we go Kopi Space, got good kopi stuff, no nonsense."</p>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;