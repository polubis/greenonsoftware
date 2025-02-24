'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import HeaderWithBackArrow from '../header-with-back-arrow/header-with-back-arrow';
import WheelPicker from '../calendar/wheel-picker/wheel-picker';

export default function DietPersonalizationForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  const [step, setStep] = useState(1);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    console.log('Age:', age);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Goal:', goal);
  };

  const buttonStyle = 'w-full text-left bg-white rounded-xl p-4 ';
  const pStyle = 'font-[500]';
  const descriptionStyle = 'text-md px-8';

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev <= 1 ? 1 : prev - 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your goal?
            </label>
            <div className="flex flex-col gap-2 text-left">
              <label className={buttonStyle}>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    value="lose_weight"
                    {...register('goal', { required: true })}
                    className="w-4 h-4 border rounded-full"
                  />
                  <p className={pStyle}>Lose weight</p>
                </div>
                <p className={descriptionStyle}>
                  Stay motivated with delicious, wholesome meals
                </p>
              </label>
              <label className={buttonStyle}>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    value="maintain_weight"
                    {...register('goal', { required: true })}
                    className="w-4 h-4 border rounded-full"
                  />
                  <p className={pStyle}>Maintain weight</p>
                </div>
                <p className={descriptionStyle}>
                  Enjoy balanced meals that boost energy and health
                </p>
              </label>
              <label className={buttonStyle}>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    value="gain_muscle"
                    {...register('goal', { required: true })}
                    className="w-4 h-4 border rounded-full"
                  />
                  <p className={pStyle}>Gain muscle</p>
                </div>
                <p className={descriptionStyle}>
                  Increase strength and enhance your performance
                </p>
              </label>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your biological sex?
            </label>
            <div className="flex flex-col gap-2 text-left">
              <label className={buttonStyle}>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    value="male"
                    {...register('sex', { required: true })}
                    className="w-4 h-4 border rounded-full"
                  />
                  <p className={pStyle}>Male</p>
                </div>
              </label>
              <label className={buttonStyle}>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    value="female"
                    {...register('sex', { required: true })}
                    className="w-4 h-4 border rounded-full"
                  />
                  <p className={pStyle}>Female</p>
                </div>
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your age?
            </label>
            <WheelPicker status="age" onChange={setAge} />
          </div>
        );
      case 4:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your height?
            </label>
            <WheelPicker status="height" onChange={setHeight} />
          </div>
        );
      case 5:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your weight?
            </label>
            <WheelPicker status="weight" onChange={setWeight} />
          </div>
        );
      case 6:
        return (
          <div className="mb-4">
            <label className="block mb-8 text-2xl font-semibold">
              What's your current goal?
            </label>
            <WheelPicker status="goal" onChange={setGoal} />
          </div>
        );
      default:
        return null;
    }
  };

  const progress = (step / 6) * 100;

  return (
    <div className="relative flex flex-col max-h-screen">
      <HeaderWithBackArrow prevStep={prevStep} title="Personalize your diet" />
      <div className="w-full h-1 my-4 rounded-lg progress-bar bg-lime-100">
        <div
          style={{ width: `${progress}%` }}
          className="h-full transition-all rounded-md duration-600 bg-lime-300"
        ></div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full pt-6 mb-4"
      >
        {renderStep()}
      </form>
      <div className="fixed bottom-0 left-0 w-full p-4">
        {step < 6 && (
          <button
            type="button"
            onClick={nextStep}
            className={`w-full px-4 py-4 font-bold text-white rounded-full ${
              isValid ? 'bg-black' : 'bg-gray-400'
            }`}
            disabled={!isValid}
          >
            Next
          </button>
        )}
        {step === 6 && (
          <button
            onClick={() => handleSubmit(onSubmit)()}
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
