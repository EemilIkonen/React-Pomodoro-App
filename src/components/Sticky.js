// Thanks to https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/#keeping-localstorage-in-sync-5
//
// Could have done this my self but he had a very good example

import React from 'react'

function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

export default useStickyState