import { RowData } from '@/interfaces/common';

export const generateRows = (text: string, currentLevel: number): RowData[] => {
  const words = text.split(" ");
  const rows: RowData[] = [];

  for (let i = 0; i < words.length; i += 5) {
    const fiveWords = words.slice(i, i + 5);
    console.log("Here", fiveWords);

    if (currentLevel === 1) {
      rows.push({
        word: fiveWords.join(" "),
        isHidden: Array(fiveWords.length).fill(false),
      });
    } else if (currentLevel === 2) {
      const randomIndex = Math.floor(Math.random() * fiveWords.length);
      const hiddenWords = fiveWords.map((word, idx) => ({
        word,
        isHidden: idx === randomIndex,
      }));
      rows.push({
        word: hiddenWords.map((w) => w.word).join(" "),
        isHidden: hiddenWords.map((w) => w.isHidden),
      });
    } else if (currentLevel === 3) {
      const indices = new Set();
      while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * fiveWords.length));
      }
      const hiddenWords = fiveWords.map((word, idx) => ({
        word,
        isHidden: indices.has(idx),
      }));
      rows.push({
        word: hiddenWords.map((w) => w.word).join(" "),
        isHidden: hiddenWords.map((w) => w.isHidden),
      });
    } else if (currentLevel === 4) {
      const visibleIndex = Math.floor(Math.random() * fiveWords.length);
      const hiddenWords = fiveWords.map((word, idx) => ({
        word,
        isHidden: idx !== visibleIndex,
      }));
      rows.push({
        word: hiddenWords.map((w) => w.word).join(" "),
        isHidden: hiddenWords.map((w) => w.isHidden),
      });
    } else {
      rows.push({
        word: fiveWords.join(" "),
        isHidden: Array(fiveWords.length).fill(true),
      });
    }
  }

  return rows;
}; 