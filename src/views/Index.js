import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// sections for this page
import Home1 from "./index-sections/Home/Home1.js";
import Home2 from "./index-sections/Home/Home2.js";
import Home3 from "./index-sections/Home/Home3.js";
import Home4 from "./index-sections/Home/Home4.js";
import Home5 from "./index-sections/Home/Home5.js";
import SignUp from "./index-sections/SignUp.js";
// import FileList from "./index-sections/Reading Materials/FileList.js";

import Contact from "./index-sections/Home/Contact.js";

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
  
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
        
          <Home1 />
          
          <Home3 />
          <Home4 />
          <Home2/>

                   
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Index;
