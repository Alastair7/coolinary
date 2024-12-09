import { useEffect, useMemo, useState } from "react";

export const useTypeWriter = (text: string, speed: number = 20) => {
  const [index, setIndex] = useState(0);

  const displayText = useMemo(() => text.slice(0, index), [index]);

  useEffect(() => {
    if (index >= text.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  return displayText;
};
