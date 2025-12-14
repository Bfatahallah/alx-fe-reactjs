import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  return (
    <div>
      <div className="container">
        <h2>Controlled Component Form</h2>
        <RegistrationForm />
      </div>
      <div className="container" style={{ marginTop: '2rem' }}>
        <h2>Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  )
}

export default App
