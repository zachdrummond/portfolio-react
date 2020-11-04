import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="collapse navbar-collapse text-right" id="navbarMenu">
      <div className="navbar-nav ml-auto">
        {/* About */}
        <Link className="navbar-brand" to="/about">
          About
        </Link>
        {/* Portfolio */}
        <Link className="navbar-brand" to="/portfolio">
          Portfolio
        </Link>
        {/* Resume */}
        <a
          className="navbar-brand"
          href="https://docs.google.com/document/d/1Lg_N5xJ_PITKCcIUaj6RQqQ6mVqgH2fbwWRqjNZHfrM/edit?usp=sharing"
        >
          Resume
        </a>
        {/* Contact */}
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
        {/* LinkedIn Icon */}
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/zachdrummond/"
        >
          <svg
            id="Group_1282"
            data-name="Group 1282"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 76.624 65.326"
            alt="LinkedIn Icon"
          >
            <path
              id="Path_2525"
              data-name="Path 2525"
              d="M1165,274.515a1.2,1.2,0,0,0,1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025,1.291,2.029h.724l-1.389-2.1Zm-.783-.472h-.785V272.45h.995c.514,0,1.1.084,1.1.757,0,.774-.593.836-1.314.836"
              transform="translate(-1092.136 -213.406)"
              fill="#0a66c2"
            />
            <path
              id="Path_2520"
              data-name="Path 2520"
              d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
              transform="translate(-903.776 -57.355)"
              fill="#0a66c2"
            />
            <path
              id="Path_2526"
              data-name="Path 2526"
              d="M1156.525,264.22a4.418,4.418,0,1,0,.085,0h-.085m0,8.33a3.874,3.874,0,1,1,3.809-3.938c0,.022,0,.043,0,.065a3.791,3.791,0,0,1-3.708,3.871h-.1"
              transform="translate(-1084.362 -207.809)"
              fill="#0a66c2"
            />
          </svg>
        </a>
        {/* GitHub Icon */}
        <a className="navbar-brand" href="https://github.com/zachdrummond">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Links;
