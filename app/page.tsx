'use client'

import { useState } from "react"

export default function Home() {
  const [ image, setImage ] = useState()
  const [ isloading, setIsLoading] = useState(false)
  const [ prompt, setPrompt ] = useState("")

  async function fetchImage(e: Event) {
    e.preventDefault()

    // if (!e?.currentTarget?.elements) {
    //   return
    // }
    // const fields = Array.from(e.currentTarget.elements);
    // const prompt = fields.find(el => el.name === 'promptInput').value;

    setIsLoading(true);
    setImage(undefined);
    console.log('prompt on pages.tsx: ', prompt)
    const { image } = await fetch('api/image', {
      method: 'POST',
      body: JSON.stringify({
        prompt
      })
    }).then(res => res.json())

    setImage(image);
    setIsLoading(false);
  }

  //create form

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={fetchImage}>
        <input name="promptInput" placeholder="Type A Prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
        <button type="submit">Generate Image</button>
      </form>
    </main>
  )
}
