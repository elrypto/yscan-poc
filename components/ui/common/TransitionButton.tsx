import { useState } from "react";


export enum State {
  Ready = "Click",
  Busy = "...",
  Complete = "✔️"
}


interface TransitionButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  clickAction: Function;
  styleType?: string;
}

export const TransitionButton: React.FC<TransitionButtonProps> = ({ clickAction, styleType, children }) => {
  const [currentState, setCurrentState] = useState<State>(State.Ready);

  const lightStyle = 'inline-flex px-6 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent border-gray-200 rounded hover:border-black hover:text-black';
  const darkStyle = 'inline-flex px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-black border border-transparent rounded hover:bg-white hover:border-black hover:text-black';

  const className = styleType === 'dark' ? darkStyle : lightStyle;


  const fnBusy = () => {
    setCurrentState(State.Busy);
  }

  const fnComplete = (backToReady = 1500) => {
    setCurrentState(State.Complete);
    setTimeout(() => { setCurrentState(State.Ready) }, backToReady)
  }

  return (
    <button
      type="button"
      className={className}
      disabled={currentState !== State.Ready}
      onClick={async evt => {
        evt.preventDefault();
        fnBusy();
        clickAction(fnComplete);
      }}
    >
      {currentState === State.Ready && children}
      {currentState === State.Busy && State.Busy}
      {currentState === State.Complete && State.Complete}
    </button>
  )
}

export default TransitionButton;