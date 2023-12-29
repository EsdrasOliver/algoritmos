let array = [1,2,3,4,5,6,7,8,9,10,12,14,16]
function binarySearch(array, x) {
    let start = 0, end = array.length - 1

    while(start <= end) {
        let mid = Math.floor((start + end) / 2)

        if(array[mid] === x) {
            return mid
        }

        else if(array[mid] < x) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }

    return false
}
console.log(binarySearch(array, 1))