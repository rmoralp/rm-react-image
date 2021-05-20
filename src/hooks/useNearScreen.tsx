import {useOnScreen} from './index'

interface UseNearScreenProps {
  initialValue?: boolean
  offset?: string
}

type UseNearScreen = (props: UseNearScreenProps) => [boolean, any]

export const useNearScreen: UseNearScreen = ({
  initialValue = false,
  offset = '200px'
}) => {
  return useOnScreen({once: true, offset, initialValue})
}
