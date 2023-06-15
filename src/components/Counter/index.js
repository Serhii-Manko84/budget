import { useEffect, useState } from "react";

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(1);

  const showValue = () => {
    setTimeout(() => {
      alert(clicks);
    }, 3000);
  };

  useEffect(() => {
    console.log("render", clicks, step);
    document.title = `Clicked ${clicks} times`;

    setStep((prevValue) => prevValue + 1);
  }, [clicks, setStep]);

  return (
    <>
      <div>Clicked: {clicks}</div>
      <div>
        <button onClick={() => setClicks(clicks + step)}>Click</button>
        <br />
        <button onClick={showValue}>Show Value</button>
        <br />
        <input
          name="step"
          value={step}
          onChange={(event) => setStep(+event.target.value)}
        />
      </div>
    </>
  );
};

export default Counter;
