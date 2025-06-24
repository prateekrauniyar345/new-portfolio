export function getRandomInt(minInt, maxInt) {
    const max  = Math.ceil(maxInt);
    const min = Math.ceil(minInt);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}