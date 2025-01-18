'use client'
import { lyrics } from './lyrics';
import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function Home() {
  const [text, setText] = useState("");
  const imageRef = useRef(null);

  // Download the image with the overlay text
  const handleDownload = async () => {
    if (imageRef.current) {
      const canvas = await html2canvas(imageRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "rxknephew-lyric-card.png";
      link.click();
    }
  };

  function handleNewLyric()
  {
    setText(lyrics[Math.floor(Math.random() * lyrics.length)]);
  }

  return (
  <div className="bg-neutral-950 min-h-screen flex flex-col items-center p-8">
  <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg mt-10 flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8 text-white">Rxknephew Random Lyric Generator</h1>

      <div
        ref={imageRef}
        className="relative inline-block w-[500px] h-[500px] bg-cover bg-center text-black text-3xl flex items-center justify-center"
        style={{ backgroundImage: "url('/images/rxknephew.png')" }}
      >
        <span className="bg-white p-2 inline-block max-w-full">{text}</span>
      </div>
      <button
        onClick = {handleNewLyric}
        className="mt-6 px-6 py-3 text-lg bg-green-600 text-white rounded-md hover:bg-green-400"
      >
        Generate new Lyric Card
      </button>
      <div className="mt-6">
        <button
        className="px-6 py-3 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-400"
          onClick={handleDownload}
        >
          Download Image
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}
