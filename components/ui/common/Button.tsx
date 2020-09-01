
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
  clickAction: Function;
}

const Button: React.FC<ButtonProps> = ({ styleType, clickAction, children }) => {
  const lightStyle = 'inline-flex px-6 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent border-gray-200 rounded hover:border-black hover:text-black';
  const darkStyle = 'inline-flex px-6 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-black border border-transparent rounded hover:bg-white hover:border-black hover:text-black';

  const className = styleType === 'dark' ? darkStyle : lightStyle;

  return (
    <button
      type="button"
      className={className}
      onClick={(evt) => {
        evt.preventDefault();
        clickAction();
      }}
    >
      {children}
    </button>
  )
}

export default Button;