import React from "react";
import ItemList from "./ItemList";
import { useFetchData } from "../../api/api"; //useFetchData() evita dependência de arquivos estáticos

const Main = ({ type }) => {
  const { artistArray, songsArray } = useFetchData();

  if (!artistArray.length || !songsArray.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
