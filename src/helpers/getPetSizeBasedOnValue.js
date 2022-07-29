import { text } from '@/mock/engText'

export const getPetSizeBasedOnValue = (value) => {
  const { small, medium, big } = text.common

  if (value === 1 || value === 2) {
    return small
  }

  if (value === 3 || value === 4) {
    return medium
  }

  return big
}
