import React, { useState } from "react";

export default function Content() {
  const [tech, setTech] = useState(["ReactJs", "NodeJs"]);
  const [newTech, setNewTech] = useState("");

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech("");
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}
