import React, { useRef, useEffect } from 'react';
import { TextAreaProps } from '@/types/global';

export default function TextArea({
  onChange,
  placeholder,
  textRef,
  value,
  maxTextareaHeight,
  autoResizeTextarea,
}: TextAreaProps) {
  const localTextref = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (autoResizeTextarea && textRef?.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = `${Math.min(
        textRef.current.scrollHeight,
        maxTextareaHeight
      )}px`;
    }
  }, [value, autoResizeTextarea, maxTextareaHeight, textRef]);

  return (
    <textarea
      ref={textRef || localTextref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full outline-none bg-transparent resize-none text-sm placeholder-[#50656E] text-gray-950"
      placeholder={placeholder}
      rows={1}
      style={{ height: '100%', maxHeight: `${maxTextareaHeight}px` }}
    />
  );
}
