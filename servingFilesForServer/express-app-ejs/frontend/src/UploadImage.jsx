import React, { useState } from 'react'
import { uploadFile } from './endpoints/uploads'

export default function UploadImage() {
  const [response, setResponse] = useState({});
  const uploadImageHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const response = await uploadFile(formData);
    setResponse(response)
    console.log("RESPONSE", response)


    /**
     * 
     try {
       const response = await fetch('/api/upload', {
         method: 'POST',
         body: formData,
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
    }
        */
  }

  return (
    <>
      <form onSubmit={uploadImageHandler} method="post" encType="multipart/form-data">
        <label htmlFor="image">Upload Image</label>
        <input name="textdata" />
        <input type="file" name="image" id="image" multiple />
        <button>Add Image</button>
      </form>
      {response.text && <p>{response.text}</p>}
    </>
  )
}
