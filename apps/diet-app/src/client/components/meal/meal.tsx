import React from 'react';
import { Croissant, Apple, Cookie, Utensils } from 'lucide-react'; // Import ikon
import { SettingsDots } from '../icons/icons';

interface MealProps {
  mealType: string;
}

export default function Meal({ mealType }: MealProps) {
  let mealName, Icon;

  switch (mealType) {
    case 'breakfast':
      mealName = 'Breakfast';
      Icon = Croissant;
      break;
    case 'lunch':
      mealName = 'Lunch';
      Icon = Apple;
      break;
    case 'snack':
      mealName = 'Snack';
      Icon = Cookie;
      break;
    case 'dinner':
      mealName = 'Dinner';
      Icon = Utensils;
      break;
    default:
      mealName = 'Meal';
      Icon = Utensils;
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-2">
          <Icon className="w-6 h-6" />
          <h2 className="text-lg font-bold">{mealName}</h2>
        </div>
        <SettingsDots />
      </div>
      <div className="flex gap-2 text-sm font-light">
        <p>&lt; 15min</p>
        <p>150 kcal</p>
      </div>
      <p>Greek yogurt with berries</p>
    </div>
  );
}
