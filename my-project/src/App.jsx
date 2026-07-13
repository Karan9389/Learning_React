import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Button from './component/Buttons.jsx'

function App() {
  const [windowbg, setWindowbg] = useState('bg-slate-100')

  return (
    <div className={`min-h-screen w-screen p-8 transition-colors duration-300 ${windowbg}`}>
      <div className="absolute bottom-6 left-6 right-3 h-15 w-45 bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-slate-200/50 flex flex-wrap gap-4 items-center justify-center">

        <Button
          color_name={"Black"}
          color_class={"bg-black text-white"}
          onClickAction={() => setWindowbg("bg-black")}
        />
        <Button
          color_name={"white"}
          color_class={"bg-white text-black border border-gray-300"}
          onClickAction={() => setWindowbg("bg-white")}

        />
        <Button
          color_name={"Blue"}
          color_class={"bg-blue-500"}
          onClickAction={() => setWindowbg("bg-blue-500")}

        />
        <Button
          color_name={"Green"}
          color_class={"bg-emerald-500"}
          onClickAction={() => setWindowbg("bg-emerald-500")}

        />
        <Button
          color_name={"Red"}
          color_class={"bg-red-500"}
          onClickAction={() => setWindowbg("bg-red-500")}

        />
        <Button
          color_name={"Pink"}
          color_class={"bg-pink-500"}
          onClickAction={() => setWindowbg("bg-pink-500")}

        />
        <Button
          color_name={"orange"}
          color_class={"bg-orange-500"}
          onClickAction={() => setWindowbg("bg-orange-500")}

        />
      </div>
    </div>
  )
}

export default App
