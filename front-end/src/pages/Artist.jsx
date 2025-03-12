import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../../api/api";
import SongList from "../components/SongList";

const Artist = () => {
  const { id } = useParams();
  const { artistArray, songsArray } = useFetchData(); // obter os dados usando o hook

  // verificaçaõ para garantir que os dados estejam carregados
  if (!artistArray.length || !songsArray.length) {
    return <div>Carregando...</div>; // exibir algo  enquanto carrega
  }

  const artist = artistArray.find((artist) => artist._id === id);
  if (!artist) {
    return <div>Artista não encontrado.</div>; // caso não encontre o artista com o id
  }

  const { name, banner } = artist;

  // filtrar músicas do artista
  const songsArrayFromArtist = songsArray.filter(
    (song) => song.artist === name
  );

  // select aleatoriamente uma música do artista
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
