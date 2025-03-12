import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../../api/api";

const Song = () => {
  const { id } = useParams();
  const { artistArray, songsArray } = useFetchData(); //obter dados com o hook

  // verificaçaõ para garantir que os dados estejam carregados
  if (!artistArray.length || !songsArray.length) {
    return <div>Carregando...</div>; //  exibir algo  enquanto carrega
  }

  const song = songsArray.find((song) => song._id === id);
  if (!song) {
    return <div>Música não encontrada.</div>; // caso não encontre a música com o id
  }

  const { image, name, duration, artist, audio } = song;

  const artistObj = artistArray.find((artistObj) => artistObj.name === artist);
  if (!artistObj) {
    return <div>Artista não encontrado.</div>; // caso não encontre o artista
  }

  // filtrar  músicas do mesmo artista
  const songsArrayFromArtist = songsArray.filter(
    (song) => song.artist === artist
  );

  // select aleatoriamente músicas para exibir
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIndex2 = Math.floor(Math.random() * songsArrayFromArtist.length);

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
