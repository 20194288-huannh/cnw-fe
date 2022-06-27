import Header from "../Header/index";
import Footer from "../Footer/index";
import React from "react";

function DefaultLayout({children}){
    return(
        <React.Fragment>
            <Header />
            <>{children}</>
            <Footer />
        </React.Fragment>
    );
}

export default DefaultLayout;