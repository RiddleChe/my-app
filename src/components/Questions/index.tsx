"use client"; 

import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Что нужно знать о покупке оборудования?',
    answer: 'Здесь будет ответ на первый вопрос.'
  },
  {
    question: 'Сколько денег нужно потратить?',
    answer: 'Здесь будет ответ на второй вопрос.'
  },
  {
    question: 'Вопрос номер три?',
    answer: 'Здесь будет ответ на третий вопрос.'
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div className={styles.question} onClick={() => toggleAccordion(index)}>
              {item.question}
              <FaChevronDown className={`${styles.icon} ${activeIndex === index ? styles.rotate : ''}`} />
            </div>
            <div className={`${styles.answer} ${activeIndex === index ? styles.open : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
