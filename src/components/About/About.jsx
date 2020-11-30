import headShot from "../../images/HeadShot.jpg";
import "./About.css";

const About = () => {
  return (
    <main>
      {/* About Me Card */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-md-8 mt-5 bg-light">
            <div className="card-body">
              {/* Header - About Me */}
              <div className="row" id="row1">
                <div className="col-sm-12" id="Header">
                  <h2 className="card-title font-weight-bold font">About Me</h2>
                  <p id="brand">
                    I am a full stack web developer with a passion for
                    developing mobile-first, user-friendly apps that solve real
                    world needs.
                  </p>
                  <hr />
                </div>
              </div>

              {/* Picture and Paragraph */}
              <div className="row" id="row2">
                <div className="col-sm-12" id="Picture">
                  <img
                    className="img img-thumbnail"
                    src={headShot}
                    alt="Head Shot of Zach Drummond"
                    id="aboutMeImg"
                  />
                  <p>
                    After 6 years of working in vocational ministry, I decided
                    to change career paths to pursue my passion for coding.
                    During my spare time I learned to code through Codecademy
                    and found myself more engaged and fulfilled than my actual
                    career.
                    <br /> <br />
                    Recently, I earned a certificate in full stack web
                    development from the Georgia Institute of Technology. During
                    the course, I was known for being the team leader on group
                    projects because I excel at strategizing for efficiency,
                    communicating and organizing all of the details, and
                    synergizing my team. I personally built a custom user
                    authentication and authorization for my final project.
                    <br /> <br />
                    My hope is to merge my leadership, interpersonal, and coding
                    skills in order to help others.
                    <br /> <br />
                    In my spare time I like to study the Bible, train my
                    miniature Aussie, go on hikes with my beautiful wife, and
                    bring people together with games and deep conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
