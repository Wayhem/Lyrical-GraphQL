import React, { Fragment, Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <h3>create new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.value}
          />
        </form>
      </Fragment>
    );
  }
}

export default SongCreate;
