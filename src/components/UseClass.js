import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Manoj Kumar",
        location: "Raichur",
      },
    };

    // console.log("constructor")
  }

  // async componentDidMount(){
  //     const data = await fetch("https://api.github.com/users/akshaymarch7");
  //     const json = await data.json();
  //     console.log(json);

  //     this.setState({
  //         userInfo:json,
  //     })

  // console.log("component Did mount")
  // }

  componentDidUpdate() {
    // console.log("component did update")
  }

  componentWillUnmount() {
    // console.log("component will unmount")
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("hi render")

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h3>Contact:manojkumar53789@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
