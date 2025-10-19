"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

type Pointer = {
  _id: string,
  x: number,
  y: number,
}

export default function Home() {
  const [pointers, setPointers] = useState<Pointer[]>([]);
  const [redoStack, setRedoStack] = useState<Pointer[]>([]);

  const addPointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const _id = uuidv4();
  
    const x = e.clientX - rect.left - 15; // 15 = half of circle width
    const y = e.clientY - rect.top - 15;  // 15 = half of circle height
  
    setPointers(prev => [...prev, { _id, x, y }]);
    setRedoStack(prev => (prev.length ? [] : prev));
  };
  
  const undo = () => {
    const lastPointer = pointers[pointers.length - 1];
    if (!lastPointer) return;

    setPointers(prev => prev.slice(0, -1));
    setRedoStack(prev => [...prev, lastPointer]);
  }

  const redo = () => {
    const lastPointer = redoStack[redoStack.length - 1];
    if (!lastPointer) return;

    setPointers(prev => [...prev, lastPointer]);
    setRedoStack(prev => prev.slice(0, -1));
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (pointers.length > 0) undo(); // Ctrl+Z or Cmd+Z → Undo
      }
  
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === "y")) {
        e.preventDefault();
        if (redoStack.length > 0) redo(); // Ctrl+Y or Cmd+Y → Redo
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pointers, redoStack]);

  return (
    <div className="gap-5 flex flex-col items-center">
      <header className="flex text-3xl sm:text-5xl font-extrabold">Undo Redo Circles</header>
      <h3 className="flex text-2xl sm:text-3xl mb-[-5px] font-extrabold self-start">Canva</h3>
      
      <div 
        onClick={addPointer}
        className="w-[100%] h-[400px] cursor-pointer relative sm:rounded-[30px] sm:rounded-tl-none sm:rounded-br-none border overflow-hidden border-gray-400"
      >
        {
          pointers.map(pointer => (
            <span 
              key={pointer._id}
              style={{ left: `${pointer.x}px`, top: `${pointer.y}px` }}
              className={`circle`} 
            />
          ))
        }
      </div>

      <div className="w-[100%] flex gap-6 justify-end">
        <button 
          type="button" 
          onClick={undo}
          disabled={pointers.length === 0}
          >
          Undo
        </button>
        <button 
          type="button" 
          onClick={redo} 
          className="sm:rounded-tr-none! sm:rounded-br-[30px]!"
          disabled={redoStack.length === 0}
        >  
          Redo
        </button>
      </div>
    </div>
  );
}