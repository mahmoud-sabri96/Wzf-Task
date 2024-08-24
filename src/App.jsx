import { Suspense } from 'react'
// Routes
import Router from './routes';
// ----------------------------------------------------------------------------------

const App = () => {

const LoaderPage = (
    <div
      style={{
        color: '#0046b2',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}
    >
      <h1>loading Page ...</h1>
    </div>
)


  // ------  JSX Code -------
  return (
    <Suspense fallback={LoaderPage}>
      <Router />
    </Suspense>

  )
}
export default App

