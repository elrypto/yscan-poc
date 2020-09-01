import React, { useEffect, useState } from 'react';
import mitt from 'next/dist/next-server/lib/mitt';


const useEthAccount = () => {
  const [currentAddress, setCurrentAddress] = useState('');

  useEffect(() => {
    const getInjectedWeb3 = async () => {
      if (typeof window.ethereum !== 'undefined'
        || (typeof window.web3 !== 'undefined')) {

        const ethereum = window.ethereum || window.web3.currentProvider;

        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const current = accounts[0];
          setCurrentAddress(current);
        } catch (e) {
          console.error('user refused to connect')
        }

        ethereum.on('accountsChanged', function (accounts) {
          // console.warn('accounts changed', accounts);
          const newCurrent = accounts[0];
          setCurrentAddress(newCurrent);
        })

        ethereum.on('chainChanged', function (accounts) {
          console.warn('chainChanged (network chain changed by user)');
        })
      }
    }

    if (window) {
      getInjectedWeb3();
    }

  }, []);

  return currentAddress;
}
export default useEthAccount;



