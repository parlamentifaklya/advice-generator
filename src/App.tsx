import { useState, useEffect } from 'react';
import AdvicePage from './components/AdvicePage';
import { AdviceProps } from './components/AdvicePage';

const App = () => {
  const [adviceData, setAdviceData] = useState<AdviceProps | null>(null);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const advice: AdviceProps = {
          id: data.slip.id,
          text: data.slip.advice,
        };
        setAdviceData(advice);
      } catch (error) {
        console.error("Failed to fetch advice:", error);
      }
    };
    getAdvice();
  }, []);

  return (
    <div>
      {adviceData ? <AdvicePage {...adviceData} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;