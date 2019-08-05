import React, { useState } from "react";

export default function Content() {
  const [tech, setTech] = useState(["ReactJs", "NodeJs"]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}
