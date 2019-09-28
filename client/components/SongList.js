import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import _ from "lodash";

const SongList = ({ data }) => {
  const { songs, loading } = data;
  const renderSongs = () =>
    _.map(songs, ({ title, id }) => <li key={id}>{title}</li>);
  return <div>{loading ? <div>loading</div> : renderSongs()}</div>;
};
const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
