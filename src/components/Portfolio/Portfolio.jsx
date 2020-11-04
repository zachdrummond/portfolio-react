import "./Portfolio.css"
import Gifted from "../../images/Gifted.png";
import FindYourAdventure from "../../images/FindYourAdventure.png";
import EatDaBurger from "../../images/Eat-da-Burger.png";
import WeatherDashboard from "../../images/WeatherDashboard.png";
import Card from "./Card";
import GitHub from "../Icon-Components/GitHub";
import Link from "../Icon-Components/Link";

const Portfolio = () => {
  return (
    <main>
      {/* Contact Card */}
      <div className="container">
        <div className="row row-cols-2 mt-5 p-2 bg-light">
          <div className="col-sm-12" id="Header">
            <h2 className="card-title font-weight-bold font">Portfolio</h2>
            <hr />
          </div>

          {/* Card 1 */}
          <Card
            title="Gifted"
            text="This is an app that tracks all of your gifts in one
                      organized place. There is a table that organizes all of
                      the gifts you receive from others and a table that
                      organizes all of the gifts that you send to others. You
                      can add new gifts, or edit/delete current gifts."
            image={Gifted}
            alt="Gifted Project"
          >
            {/* Link to Website */}
            <Link href="http://gifted-project2.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/gifted" />
          </Card>

          {/* Card 2 */}
          <Card
            title="Find Your Adventure"
            text="Find your Adventure is a one stop shop website that gives
            the user everything he/she need to know about a national
            park site in one place, based on his/her preferences."
            image={FindYourAdventure}
            alt="Find Your Adventure Project"
          >
            {/* Link to Website */}
            <Link href="https://zachdrummond.github.io/Find-Your-Adventure/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/Find-Your-Adventure" />
          </Card>

          {/* Card 3 */}
          <Card
            title="Eat-da-Burger"
            text="This is a simple restaurant app that enables users to
            create fictional burgers and eat them too! Do you dream
            about tasty burgers? Here is a place where you can create
            any burger you desire and eat it online!"
            image={EatDaBurger}
            alt="Eat-da-Burger Project"
          >
            {/* Link to Website */}
            <Link href="https://eat-da-burger-zachdrummond.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/eat-da-burger" />
          </Card>

          {/* Card 4 */}
          <Card
            title="Weather Dashboard"
            text="The weather dashboard displays data from the OpenWeather
            API. The user can retrieve the current weather information
            for any city in the world, including a 5 day forecast."
            image={WeatherDashboard}
            alt="Weather Dashboard Project"
          >
            {/* Link to Website */}
            <Link href="https://zachdrummond.github.io/weather-dashboard/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/weather-dashboard" />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
