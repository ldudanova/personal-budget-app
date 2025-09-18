import { useState } from "react";

// TODO: доделать!

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <button
            onClick={() => setDark(!dark)}
            className={`
        relative inline-flex h-8 w-16 items-center rounded-full
        transition-colors duration-300
        ${dark ? "bg-gray-800" : "bg-gray-300"}
      `}
        >
            {/* Кружок с иконкой */}
            <span
                className={`
          flex h-6 w-6 items-center justify-center rounded-full bg-purple-400 text-white
          transform transition-transform duration-300
          ${dark ? "translate-x-8" : "translate-x-1"}
        `}
            >
        {dark ? <div className="h-4 w-4">🌙</div> : <div className="h-4 w-4">☀️</div>}
      </span>

            {/* Фоновая иконка (неактивная) слева */}
            <div
                className={`
          absolute left-2 h-4 w-4
          ${dark ? "text-gray-400" : "text-gray-600"}
        `}
           />

            {/* Фоновая иконка (неактивная) справа */}
            <div  className={`
          absolute right-2 h-4 w-4
          ${dark ? "text-gray-600" : "text-gray-400"}
        `}/>
        </button>
    );
}
