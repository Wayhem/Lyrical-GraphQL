import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
<<<<<<< HEAD
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import App from "./components/App";
=======
import { Route, Router, Switch } from "react-router";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import { history } from "./history";
>>>>>>> ec03916cd137ce32a7d14ad99741af4b938f218a

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
=======
      <Router history={history}>
        <Switch>
          <Route path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
        </Switch>
>>>>>>> ec03916cd137ce32a7d14ad99741af4b938f218a
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
