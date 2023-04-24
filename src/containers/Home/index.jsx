import React from "react";
import PropTypes from "prop-types";
const Home = ({ name, age }) => {
    return <div>Home</div>;
};

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Home;
