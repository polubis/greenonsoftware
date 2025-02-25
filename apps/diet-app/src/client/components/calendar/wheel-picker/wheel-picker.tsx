'use client';

import React, { useEffect, useState } from 'react';
import Picker from 'react-mobile-picker';

type WheelPickerProps = {
  status: string;
  onChange?: (value: string) => void;
};

type WheelPickerState = {
  age: string;
};

export default function WheelPicker({ status, onChange }: WheelPickerProps) {
  const [currStatus, setCurrStatus] = useState(status);

  const age: string[] = Array.from({ length: 94 }, (_, i) =>
    (i + 5).toString()
  );

  const selections: { [key: string]: string[] } = {
    age,
  };

  const [pickerValue, setPickerValue] = useState<WheelPickerState>({
    age: '69',
  });

  useEffect(() => {
    if (onChange) {
      onChange(pickerValue.age);
    }
  }, [pickerValue, onChange]);

  useEffect(() => {
    if (status !== currStatus) {
      setCurrStatus(status);
    }
  }, [status, currStatus]);

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
                      ? 'text-4xl text-black'
                      : 'text-gray-300 text-sm'
                  } transition-all duration-300`}
                  value={option}
                >
                  {option}
                  {currStatus === 'height' ? (
                    <p className="ml-2 text-lg"> cm</p>
                  ) : null}
                  {currStatus === 'goal' || currStatus === 'weight' ? (
                    <p className="ml-2 text-lg"> kg</p>
                  ) : null}
                </Picker.Item>
              </div>
            ))}
          </Picker.Column>
        ))}
      </Picker>
    </div>
  );
}
