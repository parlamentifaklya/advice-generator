export type Advice = {
    id: number;
    text: string;
  };
  
  export async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice: Advice = {
      id: data.slip.id,
      text: data.slip.advice,
    };
    return advice;
  }
  
  getAdvice().then((advice) => {
    console.log(advice);
  });