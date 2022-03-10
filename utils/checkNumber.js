
const checkNumber = (num, minNumber, maxNumber) => {
    let oldValue = num

    if ( num < minNumber) oldValue = maxNumber
    else if ( num > maxNumber ) oldValue = 0

    return oldValue
}

export default checkNumber