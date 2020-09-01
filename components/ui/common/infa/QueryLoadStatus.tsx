import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


export const QueryLoadStatus = ({ status, error }) => {

  if (status === 'loading') {
    return <div className="flex m-6 text-lg text-cool-gray-500">
      Loading...
      <div className="ml-2">
        <FontAwesomeIcon className="animate-spin" icon={faCircleNotch} width='20' />
      </div>
    </div>
  }



  if (error) {
    console.error('error while loading:', error.message);
    return <div>Error while loading data</div>
  }

  return null;
}
