import { text } from '@/mock/engText'

export const getFilterResult = (filters, pet) => {
  const {
    timeSpend,
    moneySpend,
    securityLevel,
    size,
    easeToTrain,
    idealForFamily,
    goodForFlat,
  } = filters

  if (
    !!JSON.parse(timeSpend) &&
    JSON.parse(timeSpend) / 60 < Number(pet.observation.careTime)
  ) {
    return false
  }

  if (
    !!JSON.parse(moneySpend) &&
    JSON.parse(moneySpend) < Number(pet.observation.maintenanceCost)
  ) {
    return false
  }

  if (
    !!JSON.parse(securityLevel) &&
    ![
      Math.floor(JSON.parse(securityLevel) / 5),
      Math.ceil(JSON.parse(securityLevel) / 5),
    ].includes(pet.characteristics.security)
  ) {
    return false
  }

  if (!!JSON.parse(easeToTrain) && pet.characteristics.training < 3) {
    return false
  }

  if (
    !!JSON.parse(idealForFamily) &&
    pet.characteristics.relationshipWithChildren < 3
  ) {
    return false
  }

  if (!!JSON.parse(goodForFlat) && pet.characteristics.size > 3) {
    return false
  }

  switch (size) {
    case text.common.small:
      return [1, 2].includes(pet.characteristics.size)
    case text.common.medium:
      return [2, 3, 4].includes(pet.characteristics.size)
    case text.common.large:
      return [4, 5].includes(pet.characteristics.size)
    default:
      return true
  }
}
