import "./Portfolio.css";
import Gifted from "../../images/Gifted.png";
import FindYourAdventure from "../../images/FindYourAdventure.png";
import GoogleBooksSearch from "../../images/GoogleBooksSearch.png";
import BudgetTracker from "../../images/BudgetTracker.png";
import EatDaBurger from "../../images/Eat-da-Burger.png";
import Ciphr from "../../images/Ciphr.png";
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
            title="Ciphr"
            text="A platform to share and solve coding algorithms. 
            It enables developers to connect with each other in order to strengthen 
            their critical thinking abilities and problem solving skills."
            image={Ciphr}
            alt="Ciphr Project"
          >
            {/* Link to Website */}
            <Link href="https://ciphr.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/ciphr" />
          </Card>
          {/* Card 2 */}
          <Card
            title="Gifted"
            text="An app that tracks all of your gifts in one
            organized place. There is a table that organizes all of
            the gifts you receive from others and a table that
            organizes all of the gifts that you send to others."
            image={Gifted}
            alt="Gifted Project"
          >
            {/* Link to Website */}
            <Link href="http://gifted-project2.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/gifted" />
          </Card>

          {/* Card 3 */}
          <Card
            title="Find Your Adventure"
            text="An app that gives the user everything he/she need to know about a national
            park site in one place, based on his/her preferences."
            image={FindYourAdventure}
            alt="Find Your Adventure Project"
          >
            {/* Link to Website */}
            <Link href="https://zachdrummond.github.io/Find-Your-Adventure/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/Find-Your-Adventure" />
          </Card>

          {/* Card 4 */}
          <Card
            title="Google Books Search"
            text="This is an app that can find and save any book's basic information via Google Books API."
            image={GoogleBooksSearch}
            alt="Google Books Search Project"
          >
            {/* Link to Website */}
            <Link href="https://google-books-search-zd.herokuapp.com/search" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/google-books-search" />
          </Card>

          {/* Card 5 */}
          <Card
            title="Budget Tracker"
            text="This progressive web app tracks all of your financial needs in 
            one simple place and allows you to access everything, even if you are offline. 
            You can even download this app on your mobile device."
            image={BudgetTracker}
            alt="Budget Tracker Project"
          >
            {/* Link to Website */}
            <Link href="https://pwa-budget-tracker-zd.herokuapp.com/" />
            {/* Link to Website on GitHub */}
            <GitHub href="https://github.com/zachdrummond/pwa-budget-tracker" />
          </Card>

          {/* Card 6 */}
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
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
