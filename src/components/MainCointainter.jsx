import classes from './MainContainer.module.css'
import Display from "./ValueDisplay";
import { useState } from "react";
import Calculator from "./Calculator";

const MainContainer = () => {
  const [value, setValue] = useState(1);

  return (
    <div className={classes.mainDiv}>
      <span>
        <h1 className={classes.title}>Conversor de Moneda</h1>
      </span>
      <div className={classes.smallDiv}>
        <Display value={value} />
        <Calculator value={value} />
      </div>
      <nav className={classes.buttons}>
        <button onClick={()=>setValue(0)} className={value === 0 ? classes.button_active : classes.button}>Oficial</button>
        <button onClick={()=>setValue(1)} className={value === 1 ? classes.button_active : classes.button}>Blue</button>
        <button onClick={()=>setValue(2)} className={value === 2 ? classes.button_active : classes.button}>Bolsa</button>
        <button onClick={()=>setValue(3)} className={value === 3 ? classes.button_active : classes.button}>CCL</button>
        <button onClick={()=>setValue(4)} className={value === 4 ? classes.button_active : classes.button}>Solidario</button>
        <button onClick={()=>setValue(5)} className={value === 5 ? classes.button_active : classes.button}>Mayorista</button>
      </nav>
    </div>
  );
}

export default MainContainer;