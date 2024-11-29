import { useSelector } from 'react-redux';
import type { RootState } from './store';
import './App.css'
import SignupForm from './components/PersonalInfoForm'
import BusinessDetailsForm from './components/BusinessDetailsForm'
import SuccessCard from './components/SuccessCard';

function App() {
  const currentStep = useSelector((state: RootState) => state.form.currentStep);

  return (
    <>
      {currentStep === 1 && <SignupForm />}
      {currentStep === 2 && <BusinessDetailsForm />}
      {currentStep === 3 && <SuccessCard />}
    </>
  )
}

export default App
