import React from 'react';
import { Calendar } from '../../client/components/calendar/calendar';
import Footer from '../../client/components/footer/footer';
import CaloriesBar from '../../client/components/caloriesBar/caloriesBar';
import Wrapper from '../../client/components/wrapper/wrapper';

export default function CalendarDay() {
  return (
    <div>
      <Wrapper>
        <Calendar />
        <CaloriesBar />
        <Footer />
      </Wrapper>
    </div>
  );
}
