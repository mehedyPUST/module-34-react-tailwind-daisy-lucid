
import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'


const pricingPromise = fetch('pricingData.json')
  .then(res => res.json())

function App() {


  return (
    <>


      <header>
        <NavBar></NavBar>
      </header>

      <main className='w-11/12 mx-auto'>
        <Suspense className="text-center" fallback={<div className="min-h-[400px] flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>



        <ResultsChart></ResultsChart>


      </main >


    </>
  )
}

export default App
