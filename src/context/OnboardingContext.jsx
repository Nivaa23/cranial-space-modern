import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY_DATA = 'cranial_onboarding_data';
const STORAGE_KEY_STEP = 'cranial_onboarding_step';
const STORAGE_KEY_COMPLETED = 'cranial_onboarding_completed';

export const INITIAL_ONBOARDING_STATE = {
  name: '',
  avatar: null,
  bio: '',
  experienceLevel: '',
  role: '',
  customRole: '',
  currentRole: '',
  interests: [],
  goals: [],
  isCompleted: false,
};

const OnboardingContext = createContext(null);

export const OnboardingProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA);
      return saved ? { ...INITIAL_ONBOARDING_STATE, ...JSON.parse(saved) } : INITIAL_ONBOARDING_STATE;
    } catch {
      return INITIAL_ONBOARDING_STATE;
    }
  });

  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const savedStep = localStorage.getItem(STORAGE_KEY_STEP);
      const parsed = parseInt(savedStep, 10);
      return !isNaN(parsed) && parsed >= 1 && parsed <= 6 ? parsed : 1;
    } catch {
      return 1;
    }
  });

  const [isCompleted, setIsCompleted] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_COMPLETED) === 'true';
    } catch {
      return false;
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save onboarding data to localStorage', e);
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STEP, currentStep.toString());
    } catch (e) {
      console.warn('Could not save onboarding step to localStorage', e);
    }
  }, [currentStep]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, isCompleted.toString());
    } catch (e) {
      console.warn('Could not save onboarding completion to localStorage', e);
    }
  }, [isCompleted]);

  const updateData = (fields) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= 6) {
      setCurrentStep(stepNumber);
    }
  };

  const completeOnboarding = () => {
    setIsCompleted(true);
    setData((prev) => ({ ...prev, isCompleted: true }));
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, 'true');
    } catch (e) {
      console.warn(e);
    }
  };

  const resetOnboarding = () => {
    setData(INITIAL_ONBOARDING_STATE);
    setCurrentStep(1);
    setIsCompleted(false);
    try {
      localStorage.removeItem(STORAGE_KEY_DATA);
      localStorage.removeItem(STORAGE_KEY_STEP);
      localStorage.removeItem(STORAGE_KEY_COMPLETED);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        currentStep,
        totalSteps: 6,
        isCompleted,
        updateData,
        nextStep,
        prevStep,
        goToStep,
        completeOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
