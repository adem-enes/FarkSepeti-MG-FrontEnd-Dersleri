import { useState } from 'react'
import './App.css'
import { Form, Input } from './farksepetibaseui'

function App() {
  const [state, setState] = useState(0);
  const onSubmit = (e: any) => {
    console.log(e.target.form);
  }

  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <Input name='name' label='Name' value={state} onChange={(e) => setState(Number(e.target.value))} />
        <button type="submit" onClick={onSubmit}>Submit</button>
      </Form>
    </div>
  )
}

export default App
