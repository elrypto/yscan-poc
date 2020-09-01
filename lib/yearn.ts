import { ethers, utils } from 'ethers';
import { useRecoilValue } from 'recoil';
import { Transaction, YearnContract } from '../common/Interfaces';

// lowercasing everything to match the etherscan api return value
export const filterByYearnContracts = (ethProvider: any, trxns: Array<Transaction>, yearnContracts: Array<YearnContract>) => {

  const filtered = [];

  trxns.forEach((t, i) => {
    yearnContracts.forEach(async c => {
      // console.log('t.to, t.from, c.address', t.to, t.from, c.address)
      if (c.address.toLowerCase() === t.to.toLowerCase()) {

        const interactionType = 'unknown';

        // TODO: resolve interaction type

        t.yearnContract = { ...c, interaction: interactionType };
        filtered.push(t);
      }
    })
  })

  return filtered;
}

