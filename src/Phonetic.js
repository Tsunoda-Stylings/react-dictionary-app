import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mb-2">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPlay} />
      </a>{" "}
      {""}
      {props.phonetic.text}
    </div>
    
  );
}
