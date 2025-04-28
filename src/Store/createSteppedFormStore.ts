import { create } from 'zustand';
import { Step } from '../Views/CharacterForm/types';

type SteppedFormStore = {
  form: Record<string, unknown> | null;
  currentStep: number;
  isCurrentStepValid: boolean;
  steps: Step[];
  setForm: (form: Record<string, unknown> | null) => void;
  setSteps: (steps: Step[]) => void;
  nextStep: (form: Record<string, unknown>) => void;
  prevStep: (form: Record<string, unknown>) => void;
  removeStep: (index: number) => void;
  addStep: (step: Step, atIndex: number) => void;
  setCurrentStepValid: (valid: boolean) => void;
  validateCurrentStep: () => void;
};

const DEFAULT_STORE = {
  form: null,
  currentStep: 0,
  isCurrentStepValid: false,
  steps: [],
};

const useSteppedForm = create<SteppedFormStore>()((set, get) => ({
  ...DEFAULT_STORE,
  setForm: (form: Record<string, unknown> | null) => set({ form }),
  setSteps: (steps: Step[]) => set({ steps }),
  nextStep: (form: Record<string, unknown> | null) =>
    set({ form, currentStep: get().currentStep + 1 }),
  prevStep: (form: Record<string, unknown> | null) =>
    set({ form, currentStep: get().currentStep - 1 }),
  removeStep: (index: number) => {
    const _steps = get().steps;
    _steps.splice(index, 1);
    return set({ steps: _steps });
  },
  addStep: (step: Step, atIndex: number) => {
    const _steps = get().steps;
    _steps.splice(atIndex, 0, step);
  },
  setCurrentStepValid: (valid: boolean) => set({ isCurrentStepValid: valid }),
  validateCurrentStep: async () => {
    debugger
    const form = get().form;
    if (get().steps.length === 0 || !form) {
      return set({ isCurrentStepValid: false });
    }
    const currentStep = get().steps?.[get().currentStep];
    const schema = currentStep.validationSchema;
    if (!schema) {
      return set({ isCurrentStepValid: false });
    }
    try {
      await schema.validate(form);
      return set({ isCurrentStepValid: true });
    } catch {
      return set({ isCurrentStepValid: false });
    }
  },
}));

export default useSteppedForm;
