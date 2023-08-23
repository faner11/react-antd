import { getDefaultStore } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

export const countObjAtom = atomWithImmer({
  count: 0,
});
export const defaultStore = getDefaultStore();
