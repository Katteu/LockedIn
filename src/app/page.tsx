'use client'
import Button from "@/components/common/button/Button";
import { useText } from "@/providers/TextProvider";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { text, setText, wordsRemaining, setWordsRemaining } = useText();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setText("");
    setWordsRemaining(1000);
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    
    if (wordCount <= 1000) {
      setText(text);
      setWordsRemaining(1000 - wordCount);
    }
  };

  const navigateToMemorize = () => {
    if (text.trim().length > 0) {
      router.push('/memorize');
    } else {
      setErrorMessage('Please enter some text to memorize!');
    }
  }

  return (
    <div className="stagger-animate">
      <div className="py-[40px]">
        <h1 className="font-bold text-[54px]">
          <span className="text-primary">Lock It In! </span>
          Remember it for Real.
        </h1>
        <p className="text-[24px]">
          Type any text below and start memorizing it! Do it faster, simpler, and stress-free!
        </p>
      </div>
      <div className="flex flex-col gap-[45px]">
        <div className="flex flex-col gap-[10px]">
          <textarea
            value={text}
            placeholder="Enter your text here..."
            onChange={handleTextChange}
            className="w-full min-h-[500px] py-[25px] px-[30px] rounded-[20px] bg-input resize-none outline-none"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="font-bold text-[#656565]">Words Remaining: <span className="font-medium">{wordsRemaining}</span></p>
        </div>
        <div className="flex justify-end">
          <Button onClick={navigateToMemorize}>
            Start the Drill
            <BsArrowRight className="text-[20px] text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
