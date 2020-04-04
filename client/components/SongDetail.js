import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import { GET_SONG } from "../queries/songs";

const SongDetail = (props) => {
  let { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_SONG, { variables: { id } });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const { title, lyrics } = data.song;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{title}</h3>
    </div>
  );
};


export default SongDetail;
