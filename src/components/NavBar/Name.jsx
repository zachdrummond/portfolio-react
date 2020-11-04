const Name = () => { 
  return (
    <>
      {/* < Arrow */}
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        class="bi bi-chevron-left"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
      {/* Zach Drummond */}
      <p id="name" class="navbar-brand font-weight-bold font m-0">
        Zach Drummond
      </p>
      {/* > Arrow */}
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        class="bi bi-chevron-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </>
  );
};

export default Name;
