/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/ban-types
const LinkButton = ({ text, clickAction }: { text: string; clickAction: Function }) => (
  <Link href='#'>
    <a
      onClick={evt => {
        evt.preventDefault();
        clickAction();
      }}
      className="inline-block text-sm leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-black">
      <span>{text}</span>
    </a>
  </Link>
)

export default LinkButton;