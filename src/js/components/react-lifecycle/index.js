import React from 'react';

class ReactLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lName : "Ramshetty"
    };
  }

  componentWillMount() {
    console.log("Inside Component Will Mount");
  }

  componentDidMount() {
    console.log("Inside Component Did Mount");
  }

  render() {
    return (
      <div>
        <h2>React component Lifecycle</h2>
        <h3>1) States and Props</h3>
        <h4>Name: {this.props.name} {" "} {this.state.lName}</h4>
      </div>
    );
  }
}

ReactLifecycle.propTypes = {
  name: React.PropTypes.string.isRequired
};

export {ReactLifecycle};
