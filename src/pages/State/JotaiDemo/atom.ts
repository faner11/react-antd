import { atomWithImmer } from 'jotai-immer'

export const countObjAtom = atomWithImmer({
  count: 0,
})
