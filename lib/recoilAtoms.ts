import {
  atom
} from 'recoil';




export const recGlobalError = atom({
  key: 'globalError',
  default: ''
})


export const recGlobalBusy = atom({
  key: 'globalBusy',
  default: false
})


/* example selector
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});
*/