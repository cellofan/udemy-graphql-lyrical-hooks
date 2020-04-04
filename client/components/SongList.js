import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link } from "react-router-dom";
import { GET_SONGS, DELETE_SONG } from "../queries/songs"

const SongList = () => {
  const { loading, error, data, refetch } = useQuery(GET_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const renderSongs = songs => {
    return (songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i
            className="material-icons"
            onClick={() => {
              deleteSong({ variables: { id }}).
                then(() => refetch());
            }}
          >
            delete
          </i>
        </li>
      );
    }));
  };

  return (
    <div>
      <ul className="collection">
        {renderSongs(data.songs)}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};


export default SongList;
