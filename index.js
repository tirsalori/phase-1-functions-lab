// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let blockDistance
    if (street > 42){
        blockDistance = street - 42
    } else {
        blockDistance = 42 - street
    }
    return blockDistance
}

function distanceFromHqInFeet(street) {
    const feetDistance = distanceFromHqInBlocks(street) * 264
    return feetDistance
}

function distanceTravelledInFeet(start, destination){
    let feetTravel
    if (start > destination){
        feetTravel = (start - destination) * 264 
    } else (
        feetTravel = (destination - start) * 264
    )
    return feetTravel
}

function calculatesFarePrice(start, destination){
    const fareDistance = distanceTravelledInFeet(start, destination)
    switch (true){
        case (fareDistance <= 400):
            return 0
            break
        case (fareDistance <=2000):
            return (fareDistance - 400) * .02
            break
        case (fareDistance <=2500):
            return 25
            break
        default:
            return 'cannot travel that far'
            break;
    }

}
