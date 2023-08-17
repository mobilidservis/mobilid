import { UserLogin } from "~/model/UserLogin"

export const useScroll = () => useState<number>('scroll', () => 0)

export const useOpenMenu = () => useState<boolean>('OpenMenu', () => false)

export const useUserLogin = () => useState<UserLogin>('UserLogin', () => userLogin )

export const useToggleOpenMenu = () => {
    useOpenMenu().value = !useOpenMenu().value
  }