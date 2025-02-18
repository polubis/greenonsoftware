'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Slider from '@mui/material/Slider';
import HeaderWithBackArrow from '../header-with-back-arrow/header-with-back-arrow';

export default function DietPersonalizationForm() {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const onSubmit = (data) => console.log(data);

  const buttonStyle = 'w-full text-left bg-white rounded-xl p-4 ';
  const pStyle = ' font-[500]';
  const descriptionStyle = 'text-md px-8';

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev <= 1 ? 1 : prev - 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold text-semibold">
              What's your goal?
            </label>
            <Controller
              name="goal"
              control={control}
              defaultValue=""
              render={() => (
                <div className="flex flex-col gap-2 text-left">
                  <button className={buttonStyle}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 border rounded-full"></div>
                      <p className={pStyle}> Lose weight </p>
                    </div>
                    <p className={descriptionStyle}>
                      Stay motivated with delicious, wholesome meals
                    </p>
                  </button>
                  <button className={buttonStyle}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 border rounded-full"></div>
                      <p className={pStyle}> Maintain weight </p>
                    </div>
                    <p className={descriptionStyle}>
                      Enjoy balanced meals that boost energy and support your
                      health
                    </p>
                  </button>
                  <button className={buttonStyle}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 border rounded-full"></div>
                      <p className={pStyle}> Gain muscle</p>
                    </div>
                    <p className={descriptionStyle}>
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
            <label className="block mb-8 text-2xl font-semibold text-semibold">
             What's your biological sex?
            </label>
            <Controller
              name="goal"
              control={control}
              defaultValue=""
              render={() => (
                <div className="flex flex-col gap-2 text-left">
                  <button className={buttonStyle}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 border rounded-full"></div>
                      <p className={pStyle}> Male </p>
                    </div>
                 
                  </button>
                  <button  className={buttonStyle}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 border rounded-full"></div>
                      <p className={pStyle}> Female </p>
                    </div>
                 
                  </button>
              
                </div>
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
    <div className="relative flex flex-col max-h-screen">
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
        className="flex flex-col w-full h-full pt-6 mb-4"
      >
        {renderStep()}
      </form>
      <div className="fixed bottom-0 left-0 w-full p-4">
        {step < 4 && (
          <button
            type="button"
            onClick={nextStep}
            className="w-full px-4 py-4 font-bold text-white bg-black rounded-full"
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
