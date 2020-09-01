import { KeyboardEvent } from 'react';

const ENTER_KEY = 13;


export const wasEnterPress = (evt: KeyboardEvent<HTMLInputElement>) =>
  evt.keyCode === ENTER_KEY;



