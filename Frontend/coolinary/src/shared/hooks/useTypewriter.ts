import { useEffect, useState } from "react";

export const useTypeWriter = (words: string[], delay = 100, pause = 1000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typeDelay = isDeleting ? delay / 2 : delay;
    const currentWord = words[currentWordIndex];

    const typeEffect = setTimeout(() => {
      if (!isDeleting) {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      } else {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === 0) {
            setIsDeleting(false);
            setCurrentWordIndex(
              (prevWordIndex) => (prevWordIndex + 1) % words.length
            );
            return prevIndex;
          }

          return prevIndex - 1;
        });
      }
    }, typeDelay);

    return () => clearTimeout(typeEffect);
  }, [currentIndex, isDeleting, words, currentWordIndex, delay, pause]);

  return words[currentWordIndex].substring(0, currentIndex);
};
