"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ComboboxForm } from "@/components/ui/Premlangselect";
import Button from '@/components/ui/Button';
import { BsStars } from "react-icons/bs";
export const dynamic = 'force-dynamic'

function PremiumTranslator() {
  const [inputText, setInputText] = useState(""); // State to hold input text
  const [outputText, setOutputText] = useState(""); // State to hold translated text
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const makeAPICall = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "c93eb751cdmsh253246e52878f02p1a6126jsnd62c576fa150",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: selectedLanguage,
        text: inputText, 
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      if (result.status === "success") {
        const translatedText = result.data.translatedText;
        setOutputText(translatedText);
      } else {
        console.error("Translation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value); 
  };

  return (
    <div className="p-4 md:mx-2 lg:mx-4 xl:mx-8">
      <ComboboxForm setSelectedLanguage={setSelectedLanguage} />
      <div className="text-gray-400 md:flex flex-wrap p-2">
        <div className=" w-full md:w-1/2 lg:w-2/5 xl:w-1/2 p-2">
          <Textarea
            placeholder="Type here"
            className="border p-2 w-full h-32"
            value={inputText}
            onChange={handleInputChange}
          />
          <Button onClick={makeAPICall} className="text-sm p-1 mt-4">
            Translate Text
          </Button>
        </div>
  
        <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2 p-2">
          <Textarea
            placeholder="Translated output text"
            className="border p-2 w-full h-32"
            readOnly
            value={outputText}
          />
        </div>
      </div>
    </div>
  );
  
}

export default PremiumTranslator;