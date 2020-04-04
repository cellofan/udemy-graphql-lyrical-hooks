import gql from 'graphql-tag';

const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

const GET_SONG = gql`
  query GetSong ($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`;

const ADD_SONG = gql`
  mutation AddSong($title: String!){
    addSong(title: $title) {
      id
    }
  }
`;

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!){
    deleteSong(id: $id) {
      id
    }
  }
`;

export {
  GET_SONGS, GET_SONG, ADD_SONG, DELETE_SONG
};
