import React from 'react';
import { Calendar } from '../../client/components/calendar/calendar';
import Footer from '../../client/components/footer/footer';
import CaloriesBar from '../../client/components/calories-bar/calories-bar';
import Wrapper from '../../client/components/wrapper/wrapper';
import Nav from '../../client/components/nav/nav';
import Meal from '../../client/components/single-meal/single-meal';

export default function CalendarDay() {
  return (
    <div className="bg-gray-100">
      <Wrapper>
        <div className="flex flex-col gap-4 ">
          <Nav />
          <Calendar />
          <CaloriesBar />
          <Meal mealType="breakfast" />
          <Meal mealType="lunch" />
          <Meal mealType="lunch" />
          <Meal mealType="dinner" />
          <Footer />
        </div>
      </Wrapper>
    </div>
  );
}
