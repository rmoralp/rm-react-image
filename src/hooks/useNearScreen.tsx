import {useOnScreen} from './index'

type UseNearScreen = ({initialValue: boolean, offset: string}) => array

export const useNearScreen: UseNearScreen = ({
  initialValue = false,
  offset = '200px'
} = {}) => {
  return useOnScreen({once: true, offset, initialValue})
}
