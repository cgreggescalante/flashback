import React, { useState } from "react";

const Util = () => {
  const [files, setFiles] = useState([])

  const handleChange = (event) => {
    setFiles(event.target.files)
  }

  const loadPlays = () => {
    if (!files) return;

    const formData = new FormData()

    const arr = [...files]

    arr.forEach((file, index) => formData.append(`file-${index}`, file))

    fetch("api/loadPlays", { method: "POST", body: formData })
      .then(res => console.log(res))
  }

  return (
    <>
      <input type="file" multiple={true} accept=".json" onChange={handleChange}/>
      <button onClick={loadPlays}>Load Plays</button>
    </>
  )
}

export default Util