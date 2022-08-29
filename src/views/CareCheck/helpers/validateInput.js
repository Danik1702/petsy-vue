import { DEFAULT_CARE_CHECK_VALUES } from '@/constants'

export const validateInput = (values) => {
  if (values.weight === DEFAULT_CARE_CHECK_VALUES.weight) {
    return false
  }

  if (values.portionWeight === DEFAULT_CARE_CHECK_VALUES.portionWeight) {
    return false
  }

  return true
}
