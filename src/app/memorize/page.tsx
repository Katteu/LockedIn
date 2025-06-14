"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { headingText } from "../../components/features/memorize/heading";
import { useText } from "@/providers/TextProvider";
import Tile from "@/components/tiles/Tile";
import Button from "@/components/common/button/Button";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { generateRows } from "@/utils/memorize";
import { RowData } from "@/interfaces/common";

const MemorizePage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [rows, setRows] = useState<RowData[]>([]);
  const { text } = useText();
  const router = useRouter();

  useEffect(() => {
    if (!text || text.length === 0) {
      router.push("/");
    }
    triggerRows(currentLevel);
  }, [router, text]);

  const triggerRows = (level: number) => {
    setRows(generateRows(text, level));
  };

  const handleBackButton = () => {
    if (currentLevel === 1) {
      router.push("/");
    } else {
      triggerRows(currentLevel - 1);
      setCurrentLevel(currentLevel - 1);
    }
  };

  const handleNextButton = () => {
    if (currentLevel === 5) {
      router.push("/");
    } else {
      triggerRows(currentLevel + 1);
      setCurrentLevel(currentLevel + 1);
    }
  };

  const handleTileClick = (rowIndex: number, wordIndex: number) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].isHidden[wordIndex] = false;
    setRows(updatedRows);
  };

  return (
    <div className="stagger-animate">
      <div className="flex flex-col py-[30px] dark:text-white">
        <h1 className="text-primary font-bold text-[32px]">
          {headingText[currentLevel - 1].level}
        </h1>
        {headingText[currentLevel - 1].description}
      </div>
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[40px] sm:gap-[20px]">
          {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-[5px] lg:gap-[15px] flex-wrap w-full"
        >
          {row.word.split(" ").map((word, wordIndex) => (
            <Tile
          key={wordIndex}
          text={word}
          isHidden={row.isHidden[wordIndex]}
          onClick={() => handleTileClick(rowIndex, wordIndex)}
            />
          ))}
        </div>
          ))}
        </div>
        <div className="flex max-sm:flex-col max-sm:gap-[20px] max-sm:pb-[20px] justify-between">
          <Button outline onClick={handleBackButton} className="max-sm:justify-center max-sm:order-2">
            <BsArrowLeft />
            {currentLevel === 1 ? "Change Text" : "Previous Level"}
          </Button>
          {currentLevel > 1 && (
            <Button
              onClick={() => triggerRows(currentLevel)}
              className="max-sm:justify-center max-sm:order-1 bg-black! hover:bg-white! dark:border dark:outline-white hover:text-black hover:border hover:outline-black"
            >
              Retry
            </Button>
          )}
          <Button onClick={handleNextButton} className="max-sm:justify-center max-sm:order-3">
            {currentLevel == 5 && (
              <GiLightBulb className="text-[20px] text-white" />
            )}
            {currentLevel < 5 ? "Next Level" : "Start a New One!"}
            {currentLevel < 5 && (
              <BsArrowRight className="text-[20px] text-white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemorizePage;
