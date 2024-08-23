import { Suspense } from 'react'
// Routes
import Router from './routes';

// ----------------------------------------------------------------------------------

const App = () => {

  // ------  JSX Code -------
  return (
    <Suspense fallback={<div style={{}}>loading ...</div>}>
      <Router />
    </Suspense>

  )
}
export default App

