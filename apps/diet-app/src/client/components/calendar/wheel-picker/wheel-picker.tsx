'use client';
import {
  WheelPickerProps,
  WheelPickerState,
} from 'apps/diet-app/src/app/types/types';
import React, { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker';

export default function WheelPicker({ status, result }: WheelPickerProps) {
  const [currStatus, setCurrStatus] = useState('');
  const age: string[] = [];
  for (let i = 5; i < 99; i++) {
    age.push(i.toString());
  }

  const selections: { [key: string]: string[] } = {
    age: age,
  };

  const [pickerValue, setPickerValue] = useState<WheelPickerState>({
    age: '69',
  });

  useEffect(() => {
    setCurrStatus(() => status);

    if (status !== currStatus) {
      handleStatusChange(status);
    }
  }, [status]);

  const handleStatusChange = (newValue: string) => {
    switch (newValue) {
      case 'age':
        setCurrStatus('age');
        break;
      case 'weight':
        setCurrStatus('weight');
        break;
      case 'height':
        setCurrStatus('height');
        break;
      case 'goal':
        setCurrStatus('goal');
        break;
    }
  };

  return (
    <div>
      <Picker
        className="text-white"
        value={pickerValue}
        onChange={(newValue) => setPickerValue(newValue as { age: string })}
      >
        {Object.keys(selections).map((name) => (
          <Picker.Column className="h-[250px]" key={name} name={name}>
            {selections[name].map((option) => (
              <div
                key={option}
                className="relative flex items-center justify-center text-center"
              >
                <Picker.Item
                  className={`${
                    pickerValue.age === option
                      ? 'text-4xl text-black '
                      : ' text-gray-300 text-sm'
                  } transition-all duration-300`}
                  value={option}
                >
                  {option}
                  {currStatus === 'height' ? (
                    <p className="ml-2 text-lg"> cm</p>
                  ) : currStatus === 'goal' || currStatus === 'weight' ? (
                    <p className="ml-2 text-lg"> kg</p>
                  ) : (
                    currStatus === 'age' && ''
                  )}
                </Picker.Item>
              </div>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </div>
  );
}
