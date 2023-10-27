import React from "react";
import ReactDOM from "react-dom/client";

class A extends React.Component {
  // 2

  constructor() {
    super();
    this.state = { name: "us", surname: "Rajput", course: "BCA" };
  }
  // method
  render() {
    return (
      <>
        <h1>
          {this.props.name} {this.props.surname} from {this.props.children}
        </h1>
        <h1>
          {this.state.name} {this.state.surname}
          {this.state.course}
        </h1>
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <A name="anil" surname="doller">
    {" "}
    react
  </A>
);
