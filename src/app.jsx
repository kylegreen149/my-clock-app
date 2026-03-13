import { useState } from 'preact/hooks'
import NavBar from './NavBar'
import Alarm from "./Alarm"
import Clock from "./Clock"
import Timer from "./Timer"
import Stopwatch from "./Stopwatch"
import WorldClock from "./WorldClock"
import './app.css'
import {Route, Routes} from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Clock />}/>
        <Route path='/world_clock' element={<WorldClock />}/>
        <Route path='/alarm' element={<Alarm />}/>
        <Route path='/stopwatch' element={<Stopwatch />}/>
        <Route path='/timer' element={<Timer />}/>
      </Routes>
    </>
  )
}
