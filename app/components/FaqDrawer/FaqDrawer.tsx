'use client';

import { ReactNode, useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

type FaqDrawerProps = {
  children?: ReactNode;
  title: string;
}
export function FaqDrawer({children, title}: FaqDrawerProps) {
  const [answerIsOpen, setAnswerIsOpen] = useState(false)
  
  return (
    <div>
      <div className='flex justify-between pr-5 cursor-pointer' onClick={() => setAnswerIsOpen(!answerIsOpen)}>
        <h1>{title}</h1>
        {answerIsOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {
        answerIsOpen &&
        (<div>
          {children}
        </div>)
      }
    </div>
  )
}



