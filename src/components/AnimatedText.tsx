'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Direction = 'top' | 'bottom' | 'left' | 'right';

const getOffset = (dir: Direction) => {
  switch (dir) {
    case 'top': return { y: -20 };
    case 'bottom': return { y: 20 };
    case 'left': return { x: -20 };
    case 'right': return { x: 20 };
    default: return { y: 20 };
  }
};

export default function AnimatedText({
  text,
  direction = 'bottom',
  lang = 'en',
  once = true,
  split = true, // تحكم في التفكيك
}: {
  text: string;
  direction?: Direction;
  lang?: 'en' | 'ar';
  once?: boolean;
  split?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
    else if (!once) controls.start('hidden');
  }, [isInView, controls, once]);

  const child = {
    hidden: {
      opacity: 0,
      ...getOffset(direction),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  const items =
    lang === 'ar' || !split
      ? [text] // عرض النص كله كعنصر واحد
      : text.split(''); // split الإنجليزي

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
      initial="hidden"
      animate={controls}
      className={`flex ${split ? 'gap-1' : ''} ${lang === 'ar' ? 'flex-row-reverse' : ''} text-start w-full`}
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
    >
      {items.map((item, i) => (
        <motion.span variants={child} key={i} style={{width: lang === 'ar' ? '100%' : 'auto'}}>
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
}
