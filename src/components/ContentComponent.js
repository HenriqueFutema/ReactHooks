import React, { useState, useEffect, useMemo, useCallback } from "react";

export default function Content() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState("");

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [tech, newTech]);

  useEffect(() => {
    const storageTech = localStorage.getItem("tech");

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
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
