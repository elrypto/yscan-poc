import Link from 'next/link';
import { useRouter } from 'next/router';
import LinkButton from '../ui/common/LinkButton';
import { PATH_HOME } from '../../common/Constants';


// preload some components in the header
const usePreload = () => {

}



const Header = () => {
  usePreload();

  return (
    <div>
      <div className="bg-cool-gray-600">
        <header className="px-4 space-y-2 border-b border-cool-gray-500">
          <nav className="flex items-center justify-between max-w-5xl pt-4 mx-auto">

            <div className="flex items-center space-x-4" />
          </nav>

        </header>
      </div>
    </div>
  )
}
export default Header;




const HeaderLink = ({ url, displayText }) => {
  const router = useRouter();
  const active = 'px-0.5 py-3 border-b-2 text-gray-500 border-black';
  const inactive = 'px-0.5 py-3 border-b-2 text-gray-500 border-transparent hover:text-black transition ease-in-out duration-150'
  const styles = (router.pathname === url) ? active : inactive;

  return (
    <Link href={url}>
      <a className={styles}>
        {displayText}
      </a>
    </Link>
  )
}



