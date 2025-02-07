import React from 'react';
import { Calendar } from '../../client/components/calendar/calendar';
import Footer from '../../client/components/footer/footer';
import CaloriesBar from '../../client/components/caloriesBar/caloriesBar';
import Wrapper from '../../client/components/wrapper/wrapper';
import Nav from '../../client/components/nav/nav';
import Meal from '../../client/components/meal/meal';

export default function CalendarDay() {
  return (
    <div>
      <Wrapper>
        <Nav />
        <Calendar />
        <CaloriesBar />
        <Meal mealType='breakfast' />
        <Meal mealType='lunch' />
        <Meal mealType='lunch' />
        <Meal mealType='dinner' />
        <Footer />
      </Wrapper>
    </div>
  );
}
