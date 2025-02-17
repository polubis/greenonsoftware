'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Slider from '@mui/material/Slider';
import HeaderWithBackArrow from '../header-with-back-arrow/header-with-back-arrow';

export default function DietPersonalizationForm() {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const onSubmit = (data) => console.log(data);

  const buttonStyle = 'w-full text-left bg-white rounded-lg p-4';

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev <= 1 ? 1 : prev - 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              What's your goal?
            </label>
            <Controller
              name="goal"
              control={control}
              defaultValue=""
              render={() => (
                <div className="flex flex-col gap-4 text-left">
                  <button className={buttonStyle}>
                    Lose weight{' '}
                    <p>Stay motivated with delicious, wholesome meals</p>{' '}
                  </button>
                  <button className={buttonStyle}>
                    Maintain weight{' '}
                    <p>
                      Enjoy balanced meals that boost energy and support your
                      health
                    </p>
                  </button>
                  <button className={buttonStyle}>
                    Gain muscle{' '}
                    <p>
                      Increase strength and enhance your physical performance
                    </p>
                  </button>
                </div>
              )}
            />
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Activity Level
            </label>
            <Controller
              name="activityLevel"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select...</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="lightlyActive">Lightly Active</option>
                  <option value="veryActive">Very Active</option>
                </select>
              )}
            />
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Weight and Goal
            </label>
            <Controller
              name="weightGoal"
              control={control}
              defaultValue={50}
              render={({ field }) => (
                <Slider
                  {...field}
                  orientation="vertical"
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              )}
            />
          </div>
        );
      case 4:
        return (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Age
            </label>
            <Controller
              name="age"
              control={control}
              defaultValue={25}
              render={({ field }) => (
                <Slider
                  {...field}
                  orientation="vertical"
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                />
              )}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const progress = (step / 4) * 100;

  return (
    <div className="flex flex-col max-h-screen">
      <HeaderWithBackArrow
        prevStep={() => {
          prevStep();
        }}
        title="Personalize your diet"
      />
      <div className="w-full h-2 my-4 rounded-md progress-bar bg-lime-100">
        <div
          style={{ width: `${progress}%` }}
          className="h-full rounded-md bg-lime-200"
        ></div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full px-8 pt-6 pb-8 mb-4"
      >
        {renderStep()}
      </form>
      <div className="">
        {step < 4 && (
          <button
            type="button"
            onClick={nextStep}
            className="w-full px-4 py-4 font-bold text-white bg-black rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            className="w-full px-4 py-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
