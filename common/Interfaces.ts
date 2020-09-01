
/*
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

export interface Transaction {
  blockHash: string;
  blockNumber: string;
  confirmations: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  from: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  hash: string;
  input: string;
  isError: string;
  nonce: string;
  timeStamp: string;
  to: string;
  transactionIndex: string;
  // eslint-disable-next-line camelcase
  txreceipt_status: string;
  value: string;
  yearnContract?: YearnContract;
}

// consider converting module and action to enums
export interface EtherScan {
  module: string;
  action: string;
  address: string;
  startblock?: string;
  endblock?: string;
  sort?: string;
  apiKey?: string;
}

export interface YearnContract {
  name: string;
  address: string;
  interaction?: string;
}