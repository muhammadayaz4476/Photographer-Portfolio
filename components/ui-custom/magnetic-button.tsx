"use client";

import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength]);

  const baseClasses = `magnetic-wrap cursor-pointer ${className}`;

  const content = (
    <motion.div
      ref={ref}
      className={baseClasses}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
        mass: 0.5,
      }}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  if (onClick || type === 'submit') {
    return (
      <button type={type} onClick={onClick} className="p-0 bg-transparent border-0">
        {content}
      </button>
    );
  }

  return content;
}
