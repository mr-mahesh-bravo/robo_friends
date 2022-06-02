import React, { Component } from "react";
import Cardlist from "./Cardlist";
// import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./App.css";
import Scrollbar from "./scrollbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scrollbar>
          <Cardlist robots={filteredRobots} />
        </Scrollbar>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <Searchbox />
//       <Cardlist robots={robots} />
//     </div>
//   );
// };

// export default App;
