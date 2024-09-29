"use client";

import React from 'react';
import styles from './blog.module.scss';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Что такое слитный майнинг',
    date: '26.05.2022',
    category: 'Майнинг',
    description: 'Майнинг криптовалют связан со многими проблемами, начиная от роста хешрейта, заканчивая перегрузкой блокчейна и больших затрат. Но все эти проблемы можно решить с помощью слитного...',
    image: '/blog/Rectangle105.png',
  },
  {
    id: 2,
    title: 'Что такое дуал майнинг',
    date: '26.05.2022',
    category: 'Майнинг',
    description: 'Прибыльным может быть не только майнинг биткоина. С одной стороны — это очевидное утверждение, с другой — актуальная информация для новичков...',
    image: '/blog/Rectangle106.png',
  },
  {
    id: 3,
    title: 'Майнинг криптовалюты на ферме: преимущества',
    date: '26.05.2022',
    category: 'Майнинг',
    description: 'Отель для майнинг ферм — это специально оборудованное помещение в котором вы можете, за определенную плату, разместить своё оборудование...',
    image: '/blog/Rectangle107.png',
  },
  {
    id: 4,
    title: 'Все, что нужно знать о Tether',
    date: '26.05.2022',
    category: 'Майнинг',
    description: 'В период развития криптоиндустрии появился новый класс электронных монет — стейблкоины. Стейблкоин — это вид криптовалюты с фиксированной стоимостью...',
    image: '/blog/Rectangle108.png',
  },
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blogContainer}>
      <h2 className={styles.title}>БЛОГ</h2>
      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.postMeta}>
                <span>{post.date}</span> | <span>{post.category}</span>
              </div>
              <p className={styles.postDescription}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
