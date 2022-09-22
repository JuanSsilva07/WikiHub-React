/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer id={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="buttons">     
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          Ver repositório
        </a>
        <a href="#" rel="noreferrer" className="remover" type="button" onClick={handleRemove}>
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
