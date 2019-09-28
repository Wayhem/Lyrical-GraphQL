import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Route, Router, Switch } from "react-router";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import { history } from "./history";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
