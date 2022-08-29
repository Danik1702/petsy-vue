import { text } from '@/mock/engText'

const getCorrectClassName = ({ inputValue, min, max }) => {
  if (inputValue >= min && inputValue <= max) {
    return 'good-result-bg'
  } else if (
    (inputValue < min && min - inputValue <= 2) ||
    (inputValue > max && inputValue - max <= 2)
  ) {
    return 'medium-result-bg'
  } else {
    return 'bad-result-bg'
  }
}

export const getCareOptionResult = ({ option, normValue, inputValue }) => {
  const resultObj = {}
  const [min, max] = normValue.split('-')
  const inputValueNumber = Number(inputValue)

  switch (option) {
    case 'weight':
      resultObj.normValueText = `${inputValue} ${text.unitsOfMeasurement.weight}`
      break

    case 'numberOfWalks':
      resultObj.normValueText = `${inputValue} ${text.careCheckPage.walking}${
        inputValue === 1 ? '' : 's'
      }`
      break

    case 'eatTimes':
      resultObj.normValueText = `${inputValue} ${text.careCheckPage.meal}${
        inputValue === 1 ? '' : 's'
      }`
      break

    case 'portionWeight':
      resultObj.normValueText = `${inputValue} ${text.unitsOfMeasurement.liteWeight}`
      break
  }

  resultObj.careOptionResultClass = getCorrectClassName({
    inputValue: inputValueNumber,
    min,
    max,
  })

  return resultObj
}
