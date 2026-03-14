import {useState, useEffect} from 'preact/hooks'

const Timer = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // console.log(days, hours, minutes, seconds)  

    return (
        <form>
            <label>Days</label>
            <input type="number" name="days" min="0" max="99" value={days} onChange={(e) => setDays(parseInt(e.target.value) || 0)} />

            <label>Hours</label>
            <input type="number" name="hours" min="0" max="23" value={hours} onChange={(e) => setHours(parseInt(e.target.value) || 0)} />

            <label>Minutes</label>
            <input type="number" name="minutes" min="0" max="59" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} />

            <label>Seconds</label>
            <input type="number" name="seconds" min="0" max="59" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} />

            <button type="submit">Start Timer</button>
        </form>
    )
}

export default Timer