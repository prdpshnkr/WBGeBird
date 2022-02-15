import React, { useState } from 'react';

export const ObsContext = React.createContext();

function ObservationRecordProvider() {

  const [value, setValue] = useState('');  
  
  return (
    <div>
        <ObsContext.Provider value={{
            value,
            setValue
        }}>

        </ObsContext.Provider>
    </div>
  )
}

export default ObservationRecordProvider