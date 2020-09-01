import { YearnContract, EtherScan } from './Interfaces';

// next router paths
export const PATH_HOME = '/';


// react query keys
export const QUERY_KEY_TRANSACTIONS_FOR_ACCOUNT = 'trxnsForAccount';

export const ETHERSCAN_BASE_URL = 'https://api.etherscan.io/api?';

export const ETHERSCAN_OBJ_DEFAULTS: EtherScan = {
  module: '',
  action: '',
  address: '',
  startblock: '0',
  endblock: '99999999',
  sort: 'asc',
  apiKey: process.env.ETHERSCAN_KEY
}


export const YEARN_CONTRACTS: Array<YearnContract> = [
  { name: 'yearn: yCRV Vault', address: '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c' },
  { name: 'Ygov.finance: Goverance', address: '0xBa37B002AbaFDd8E89a1995dA52740bbC013D992' }
]