import { useRecoilState } from 'recoil';
import { recGlobalError } from '../../lib/recoilAtoms';

// used in combination with GlobalError component in Layout
const useGlobalError = () => {
  const [globalError, setGlobalError] = useRecoilState(recGlobalError);

  const addError = (errorStr: string) => setGlobalError(errorStr);
  const clearError = () => addError('');

  return { globalError, addError, clearError }
}

export default useGlobalError;