import { text } from '@/mock/engText'

export const getCorrectLifetime = (value) =>
  `${value} ${text.unitsOfMeasurement.years}`
export const getCorrectHeight = (value) =>
  `${value} ${text.unitsOfMeasurement.length}`
export const getCorrectWeight = (value) =>
  `${value} ${text.unitsOfMeasurement.weight}`
export const getCorrectCost = (value) => `${value} $`
export const getCorrectMaintenanceCost = (value) =>
  `${value} ${text.unitsOfMeasurement.moneyPerMonth}`
export const getCorectCareTime = (value) =>
  `${value} ${text.unitsOfMeasurement.hoursPerDay}`

export const getCorrectObservationData = (data) => {
  let resultObject = {}
  const observationEmtries = Object.entries(data)

  observationEmtries.forEach((item) => {
    switch (item[0]) {
      case 'lifetime':
        resultObject[item[0]] = getCorrectLifetime(item[1])
        break
      case 'height':
        resultObject[item[0]] = getCorrectHeight(item[1])
        break
      case 'weight':
        resultObject[item[0]] = getCorrectWeight(item[1])
        break
      case 'cost':
        resultObject[item[0]] = getCorrectCost(item[1])
        break
      case 'maintenanceCost':
        resultObject[item[0]] = getCorrectMaintenanceCost(item[1])
        break
      case 'careTime':
        resultObject[item[0]] = getCorectCareTime(item[1])
        break

      default:
        resultObject[item[0]] = item[1]
    }
  })

  return resultObject
}
