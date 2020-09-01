import { useQuery } from 'react-query'
import { useState, useEffect } from 'react';
import useEthAccount from '../components/hooks/useEthAccount';
import { QUERY_KEY_TRANSACTIONS_FOR_ACCOUNT, YEARN_CONTRACTS } from '../common/Constants';
import { fetchFromEtherScan } from '../lib/etherScan';
import { EtherScan, Transaction } from '../common/Interfaces';
import { filterByYearnContracts } from '../lib/yearn';



const Index = () => {
  const { currentAddress, provider } = useEthAccount();

  return (
    <div className="flex">
      <Left currentAddr={currentAddress} />
      <TransactionsForAddress currentAddr={currentAddress} provider={provider} />
    </div>
  )
}
export default Index;



const TransactionsForAddress = ({ currentAddr, provider }: { currentAddr: string; provider: any }) => {
  const [filtered, setFiltered] = useState<Array<Transaction>>(null);


  const scanObj: EtherScan = {
    module: 'account',
    action: 'txlist',
    address: currentAddr
  }


  const { data: transactions, isLoading, error } = useQuery(
    [QUERY_KEY_TRANSACTIONS_FOR_ACCOUNT, currentAddr],
    async () => fetchFromEtherScan(scanObj),
    {
      enabled: currentAddr
    }
  );


  useEffect(() => {
    if (transactions) {
      const tempFiltered = filterByYearnContracts(provider, transactions, YEARN_CONTRACTS);
      setFiltered(tempFiltered);
    }
  }, [transactions])



  if (isLoading) return <div className="mt-6 text-cool-gray-300">Loading...</div>;
  if (error) return <div className="mt-6 text-red-600">Error: {error.message}</div>


  console.log('filtered:', filtered);

  return (
    <div className="flex justify-center mt-8">
      <div className="space-y-2">
        {filtered &&
          filtered.map((tx, i) => (
            <div key={tx.hash}>
              <div className="p-4 border rounded border-cool-gray-500 w-96">
                <div className="space-y-2">
                  <div className="text-xs text-gray-400">{tx.yearnContract.name}</div>
                  <div className="text-sm text-gray-100">
                    {tx.yearnContract.interaction}
                  </div>
                </div>
              </div>
            </div>
          ))
        }

        {
          filtered && filtered.length < 1 &&
          <div>
            No contract interactions with Yearn from this address
          </div>
        }
      </div>
    </div >
  )
}


const Left = ({ currentAddr }: { currentAddr: string }) => (
  <div className="w-64 p-2 mt-6">
    <div className="flex flex-col items-center space-y-2">
      <img className="w-10" alt="logo" src='yearn-logo.png' />
      <div className="text-sm text-cool-gray-400">
        {addrDisplay(currentAddr)}
      </div>
    </div>

  </div>
)


const addrDisplay = (addr: string) => {
  if (addr && addr.length > 0) {
    return `${addr.slice(0, 4)}...${addr.slice(addr.length - 3, addr.length)}`
  }
}