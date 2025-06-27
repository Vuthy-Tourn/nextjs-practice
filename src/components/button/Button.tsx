import React from 'react'
import style from './style.module.css'
export default function Button() {
  return (
    <div>
      <button
        className={style.background}
      >
        Click ME
      </button>
    </div>
  );
}

