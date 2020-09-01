import { useRecoilValue } from 'recoil';
import { recGlobalError } from '../../../../lib/recoilAtoms';
import useGlobalError from '../../../hooks/useGlobalError';

const GlobalError = () => {
  const { globalError, clearError } = useGlobalError();

  if (!globalError) return null;

  if (globalError) return (
    <div className="p-4 m-6 border border-red-400 rounded-lg bg-red-50">
      <div className="flex justify-between text-red-800">
        <div>
          <span className="font-semibold">
            Error:
        </span>
          <span className="ml-2">
            {globalError}
          </span>
        </div>
        <div className="mr-4">
          <a
            href="..."
            className="text-xl font-bold text-red-700 hover:text-red-400"
            onClick={evt => {
              evt.preventDefault();
              clearError();
            }}
          >
            X
        </a>
        </div>
      </div>
    </div>
  )
}
export default GlobalError;