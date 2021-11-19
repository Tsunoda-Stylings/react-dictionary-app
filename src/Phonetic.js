import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faPlay} />
      </a>{" "}
      {""}
      {props.phonetic.text}
    </div>
  );
}
