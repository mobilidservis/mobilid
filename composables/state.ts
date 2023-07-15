export const useScroll = () => useState<number>('scroll', () => 0)

export const useOpenMenu = () => useState<boolean>('OpenMenu', () => false)

export const useToggleOpenMenu = () => {
    useOpenMenu().value = !useOpenMenu().value
  }