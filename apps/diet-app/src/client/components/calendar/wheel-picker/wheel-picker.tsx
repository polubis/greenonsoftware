'use client';
import React, { useState } from 'react';
import Picker from 'react-mobile-picker';

export default function WheelPicker() {
  let age = [];
  for (let i = 5; i < 99; i++) {
    age.push(i);
  }

  const selections = {
    age: age,
  };

  const [pickerValue, setPickerValue] = useState({
    age: 69,
  });

  console.log(pickerValue.age);

  return (
    <div>
      <Picker
        className="text-white"
        value={pickerValue}
        onChange={setPickerValue}
      >
        {Object.keys(selections).map((name) => (
          <Picker.Column key={name} name={name}>
            {selections[name].map((option) => (
              <div className='relative flex items-center justify-center text-center'>
                <Picker.Item
                  key={option}
                  className={`${
                    pickerValue.age === option
                      ? 'text-4xl text-black'
                      : ' text-gray-300'
                  } transition-all duration-300`}
                  value={option}
                >
                  {option} 
                </Picker.Item>
              </div>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </div>
  );
}
