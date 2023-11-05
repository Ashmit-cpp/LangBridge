'use client';

import Button from '@/components/ui/Button';
import { ComboboxForm } from '@/components/ui/Premlangselect';
import { Textarea } from '@/components/ui/textarea';
import React, { useState, ChangeEvent } from 'react';
import { BsStars } from 'react-icons/bs';

export const dynamic = 'force-dynamic';

function PremiumTranslator() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [error, setError] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setInputText(reader.result);
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const makeAPICall = async () => {
    if (!selectedLanguage) {
      setError('Please select a language before translating.');
      return;
    }

    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'c93eb751cdmsh253246e52878f02p1a6126jsnd62c576fa150',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: 'en',
        target_language: selectedLanguage,
        text: inputText
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.status === 'success') {
        const translatedText = result.data.translatedText;
        setOutputText(translatedText);
        setError(''); // Clear the error message if the translation is successful
      } else {
        console.error('Translation failed');
        setError('Translation failed');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="p-4 md:mx-2 lg:mx-4 xl:mx-8">
      <ComboboxForm setSelectedLanguage={setSelectedLanguage} />
      <div className="md:flex flex-wrap p-2">
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/2 p-2">
          <Textarea
            placeholder="Type here"
            className="placeholder:text-gray-500 border p-2 w-full h-32"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="flex items-center text-gray-100 mt-4 ">
            <Button
              onClick={makeAPICall}
              className="font-semibold border-0 py-2 px-6 rounded"
            >
              <BsStars className="text-purple-500 mr-2" />
              Translate Text
            </Button>
            <label className="cursor-pointer font-semibold  bg-purple-600 border-0 py-2 px-6 hover:bg-purple-800 ml-5">
              Upload File
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {error && <div className="text-rose-500 font-semibold">{error}</div>}
        </div>

        <div className="w-full md:w-1/2 lg:w-3/5 xl:w-1/2 p-2">
          <Textarea
            placeholder="Translated output text"
            className="placeholder:text-gray-500 border p-2 w-full h-32"
            readOnly
            value={outputText}
          />
        </div>
      </div>
    </div>
  );
}

export default PremiumTranslator;
