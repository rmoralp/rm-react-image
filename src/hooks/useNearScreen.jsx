import {useOnScreen} from './index'

export const useNearScreen = ({initialValue = false, offset = '200px'}) => {
  return useOnScreen({once: true, offset, initialValue})
}
