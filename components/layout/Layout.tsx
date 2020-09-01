import { ReactQueryDevtools } from 'react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ToastProvider } from 'react-toast-notifications'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import GlobalError from '../ui/common/infa/GlobalError';
import useGlobalBusy from '../hooks/useGlobalBusy';





export const Layout = ({ children }) => (
  <div id="content">
    <RecoilRoot>
      {
        //  <Header />
      }
      <GlobalError />
      <GlobalBusy />
      <ToastProvider>
        {children}
      </ToastProvider>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </div>
)


const GlobalBusy = () => {

  Modal.setAppElement('#content')
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px'
    }
  };

  const { isBusy } = useGlobalBusy();


  return (
    <>
      {
        isBusy &&
        <Modal
          isOpen={isBusy}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {
            // <button type="button" onClick={closeModal}>close</button>
          }
          <div className="flex text-cool-gray-500">
            <div className="text-xl">working...</div>
            <div className="ml-2">
              <FontAwesomeIcon className="animate-spin" icon={faCircleNotch} width='26' />
            </div>
          </div>
        </Modal>
      }
    </>
  )
}