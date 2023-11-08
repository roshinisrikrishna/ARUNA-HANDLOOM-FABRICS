import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Portfolio1 from "./Portfolio1";
import Contact from "./Contact"



function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    
      <IndexNavbar />
      {/* <SearchModal isOpen={searchModalOpen} toggleSearchModal={toggleSearchModal} /> Display the SearchModal */}
      {/* <SignUp /> */}
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Portfolio1 />

                   
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Index;
