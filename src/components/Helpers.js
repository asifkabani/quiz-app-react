export const randomize = (arr) => {
    return arr.sort(function(a, b) {
        return 0.5 - Math.random();
    })
}