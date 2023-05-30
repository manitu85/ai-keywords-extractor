/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

const AiComponentsContext = createContext();

const useMaxNumberInitialState = () => {
  const optionValue = '10';
  return Number(optionValue);
};

const voiceStyleInitialState = () => {
  const optionValue = 'Formal';
  return optionValue.toLowerCase();
};

const audienceInitialState = () => {
  const optionValue = 'Audience';
  return optionValue.toLowerCase();
};

export default function AiContextProvider({ children }) {
  const [prompt, setPrompt] = useState([]); // Bot response
  const [audienceSelect, setAudienceSelect] = useState(audienceInitialState);
  const [voiceStyleSelect, setVoiceStyleSelect] = useState(voiceStyleInitialState);
  const [maxNumberSelect, setMaxNumberSelect] = useState(useMaxNumberInitialState);

  return (
    <AiComponentsContext.Provider
      value={{
        prompt,
        setPrompt,
        audienceSelect,
        setAudienceSelect,
        voiceStyleSelect,
        setVoiceStyleSelect,
        maxNumberSelect,
        setMaxNumberSelect
      }}
    >
      {children}
    </AiComponentsContext.Provider>
  );
}

//* Avoids props drilling
export function useAiKeywordsContext() {
  return useContext(AiComponentsContext);
}

// Note: Usage
// const {
//   prompt,
//   setPrompt,
//   audienceSelect,
//   setAudienceSelect,
//   voiceStyleSelect,
//   setVoiceStyleSelect,
//   maxNumberSelect,
//   setMaxNumberSelect;
// } = useAiKeywordsContext();
