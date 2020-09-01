import { useRecoilState } from 'recoil';
import { recGlobalBusy } from '../../lib/recoilAtoms';

const useGlobalBusy = () => {
  const [busy, setBusy] = useRecoilState(recGlobalBusy);

  const startBusy = () => setBusy(true);
  const endBusy = () => setBusy(false);

  const busyAsync = async (busyFunction: { (): any }) => {
    startBusy();
    await busyFunction();
    endBusy();
  }

  return { startBusy, endBusy, isBusy: busy, busyAsync };
}

export default useGlobalBusy;