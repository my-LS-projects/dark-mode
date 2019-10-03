import React from "react"

// to set something to local storage, we need a key (must be a string), and a value (can be anything)
// to retreive from localStorage, use the same method as adding something new and it will replace old key/value pair in localStorage


export const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [ storedValue, setStoredValue ] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    })
    return [ storedValue ];
}

const setValue = value => {
    // save state
    setStoredValue(value);
    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
}