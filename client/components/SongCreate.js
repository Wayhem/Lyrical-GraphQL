<<<<<<< HEAD
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
=======
import React, { Fragment } from "react";

const SongCreate = () => {
  return (
    <Fragment>
      <h3>create new song</h3>
      <form></form>
    </Fragment>
  );
};
>>>>>>> ec03916cd137ce32a7d14ad99741af4b938f218a

export default SongCreate;
