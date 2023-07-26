import { useState } from 'react'
import useThemeColor from './hooks/useThemeColor'


function App() {
  const [result, setResult] = useState("");
  const { theme, borderColor , changeTheme } = useThemeColor();
  
  const handleThemeChange = (newTheme, newBorderColor) => {
    changeTheme(newTheme, newBorderColor);
  };

  const handleClick = (e) => {
   setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      
      const expression = result;
      const resultValue = eval(expression); 
      setResult(resultValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // const calculate = () => {
  //   try {
  //     setResult(eval(result).toString());
  //   } catch (error) {
  //     setResult("Error");
  //   }
  // }

  // const calculate = () => {
  //   try {
  //     const safeEval = new Function('return ' + result);
  //     setResult(safeEval().toString());
  //   } catch (error) {
  //     setResult('Error');
  //   }
  // };
  
  const procentCalculate = () => {
    try {
      const expression = result;
      const resultProcent = eval(expression) / 100;
      setResult(resultProcent.toString());
    } catch (error) {
      setResult("Error");
    }
  }



  return (
    <>
          
         <div className={`container palette-${theme}`} style={{borderColor}}>
         {/* <button onClick={handleThemeChange}>Theme</button> */}
          <form>
              <input placeholder='0' type="text" value={result} readOnly/>
          </form>
          <div className="theme-switch">
          <label htmlFor="theme-switch-radio-bright">Theme</label>
          <div className="input_container">
              <input
                  type="radio"
                  id="theme-switch-radio-dark"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => handleThemeChange("dark",)}
              />
              <input
                  type="radio"
                  id="theme-switch-radio-dark"
                  value="bright"
                  checked={theme === "bright"}
                  onChange={() => handleThemeChange("bright", "black" )}
              />

              <input
                  type="radio"
                  id="theme-switch-radio-alternative"
                  value="alternative"
                  checked={theme === "alternative"}
                  onChange={() => changeTheme("alternative")}
              />
              </div>
          </div>
          <div className='keypad'>
            <button className={`clear palette-${theme}`} onClick={clear}>Reset</button>
            <button className={`keypad_orange palette-${theme}`} onClick={procentCalculate} name="%">%</button>
            <button className={`keypad_orange palette-${theme}`} name="/" onClick={handleClick}>&divide;</button>
            <button  name="7" onClick={handleClick}>7</button>
            <button  name="8" onClick={handleClick}>8</button>
            <button  name="9" onClick={handleClick}>9</button>
            <button className={`keypad_orange palette-${theme}`} name="*" onClick={handleClick}>&times;</button>
            <button  name="4" onClick={handleClick}>4</button>
            <button  name="5" onClick={handleClick}>5</button>
            <button  name="6" onClick={handleClick}>6</button>
            <button className={`keypad_orange palette-${theme}`} name="-" onClick={handleClick}>&ndash;</button>
            <button  name="1" onClick={handleClick}>1</button>
            <button  name="2" onClick={handleClick}>2</button>
            <button  name="3" onClick={handleClick}>3</button>
            <button  className={`keypad_orange palette-${theme}`}  name="+" onClick={handleClick}> +</button>
            <button  className='zero' name="0" onClick={handleClick}>0</button>
            <button  name="." onClick={handleClick}>.</button>
            <button  className={`keypad_orange palette-${theme}`} onClick={calculate}>=</button>
          </div>
      </div>
    </>
  )
}

export default App
