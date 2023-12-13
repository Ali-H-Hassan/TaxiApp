import { useState } from 'react'

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />
    ])

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('Successful Account Creation')
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '.5rem',
          justifyContent: 'flex-end'
        }}
      >
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
      </div>
    </form>
  )
}

export default App
