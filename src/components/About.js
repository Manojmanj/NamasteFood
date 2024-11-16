import React from "react";
import UserClass from "./UseClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent Constructor")
  }

  componentDidMount() {
    // console.log("parent component")
  }

  render() {
    // console.log("parent render")

    return (
      <div className="text-center mt-10 text-lg">
        <h1>About : </h1>
        <h2>Food Ordering by ReactJs</h2>
        {/* <UserContext.Consumer>
                    {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                </UserContext.Consumer> */}
        <UserClass name={"first"} location={"Raichur"} />
      </div>
    );
  }
}

export default About;
