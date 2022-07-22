import React, { useState } from "react";
import "./KitInfo.css";

import { FaYoutube, FaGithub } from "react-icons/fa";

const KitInfo = ({kit, url}) => {

  return (
    <div className="KitInfo">
      <h1 className="kitInfo-name">
        {kit.name}
      </h1>
      {kit.tech.map((tag, i) => {
        return <a key={i} href={tag[1]} target="_blank">{tag[0]}</a>
      })}
      <h1 className="kitInfo-info">
        {kit.info}
      </h1>
      <div className="kitInfo-links">
        <FaYoutube size={60} />
        <FaGithub size={60} />
      </div>
    </div>
  );

};

export default KitInfo;
