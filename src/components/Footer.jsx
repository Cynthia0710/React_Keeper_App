import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return <footer><p>ⓒ {year} Cynthia Cao</p></footer>;
}

export default Footer;