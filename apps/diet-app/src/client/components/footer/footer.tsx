'use client';

import React from 'react';
import { AddBtn, BarChart, Book, Plan, ShoppingList } from '../icons/icons';

const liStyle = 'flex flex-col items-center justify-center';
const btnStyle = 'flex flex-col items-center justify-center focus:outline-none';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen max-w-md bg-white">
      <ul className="flex items-center justify-around p-4">
        <li className={liStyle}>
          <button
            className={btnStyle}
            onClick={() => console.log('Plan clicked')}
          >
            <Plan />
            Plan
          </button>
        </li>
        <li className={liStyle}>
          <button
            className={btnStyle}
            onClick={() => console.log('Recipes clicked')}
          >
            <Book />
            Recipes
          </button>
        </li>
        <li className={liStyle}>
          <button
            className={btnStyle}
            onClick={() => console.log('Add clicked')}
          >
            <AddBtn />
          </button>
        </li>
        <li className={liStyle}>
          <button
            className={btnStyle}
            onClick={() => console.log('Shopping clicked')}
          >
            <ShoppingList />
            Shopping
          </button>
        </li>
        <li className={liStyle}>
          <button
            className={btnStyle}
            onClick={() => console.log('Progress clicked')}
          >
            <BarChart />
            Progress
          </button>
        </li>
      </ul>
    </footer>
  );
}
