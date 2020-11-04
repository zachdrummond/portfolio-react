const About = () => {
  return (
    <main>
      {/* Contact Card */}
      <div class="container">
        <div class="card col-md-8 mt-5 bg-light">
          <div class="card-body">
              
            {/* Header - About Me */}
            <div class="row" id="row1">
              <div class="col-sm-12" id="Header">
                <h2 class="card-title font-weight-bold font">About Me</h2>
                <hr />
              </div>
            </div>

            {/* Picture and Paragraph */}
            <div class="row" id="row2">
              <div class="col-sm-12" id="Picture">
                <img
                  class="img img-thumbnail"
                  src="../images/Headshot.JPG"
                  alt="Head Shot of Zach Drummond"
                  id="aboutMeImg"
                />
                <p>
                  After 6 years of working in vocational ministry, I decided to
                  change career paths to pursue my passion for coding. During my
                  spare time I learned to code through Codecademy and found
                  myself more engaged and fulfilled than my actual career.
                  <br /> <br />
                  I enrolled in Georgia Tech's coding boot camp in order to
                  become a full stack web developer. Although the pace is
                  incredibly fast and the course is challenging, I am loving
                  every minute of it. Collaborating with my cohort members has
                  become my favorite aspect of the boot camp.
                  <br /> <br />
                  My hope is to one day merge my skills of leadership, teaching,
                  and coding along with my passion to bring people together in
                  order help people who can't help themselves.
                  <br /> <br />
                  In my spare time I like to study the Bible, train my miniature
                  Aussie, go on hikes with my beautiful wife, and bring people
                  together with games and deep conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
