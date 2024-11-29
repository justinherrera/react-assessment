import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  formData: {
    personalInfo: { email: '', password: '', confirmPassword: '' },
    accountType: '',
    businessDetails: { companyName: '', industry: '' },
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { updateFormData, setCurrentStep } = formSlice.actions;
export default formSlice.reducer;
