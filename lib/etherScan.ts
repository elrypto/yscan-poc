
import axios from 'redaxios';
import { EtherScan } from '../common/Interfaces';
import { ETHERSCAN_OBJ_DEFAULTS, ETHERSCAN_BASE_URL } from '../common/Constants';


// https://api.etherscan.io/api?
// module=account&
//  action=txlistinternal&
//  address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3
//  &startblock=0
//  &endblock=2702578&sort=asc
// &apikey=YourApiKeyToken

// TODO: defensive on API key and params
export const fetchFromEtherScan = async (etherScan: EtherScan) => {
  const scanParams = Object.assign(ETHERSCAN_OBJ_DEFAULTS, etherScan);
  console.log('etherscan query with:', scanParams);

  const queryStr = `${ETHERSCAN_BASE_URL}module=${scanParams.module}&action=${scanParams.action}&address=${scanParams.address}&startblock=${scanParams.startblock}&endblock=${scanParams.endblock}&sort=${scanParams.sort}&apikey=${scanParams.apiKey}`;

  console.log('etherscan query str:', queryStr);

  const response = await axios.get(queryStr);

  if (response.data.status === '0') {
    throw new Error(response.data.result);
  }

  return response.data.result;
}