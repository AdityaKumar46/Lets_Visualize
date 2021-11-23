export function getInsertionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    let key, j;
    for (let i = 1; i < copy.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            else {
                break;
            }
        }
        arr[j + 1] = key;
    }
    return animations;
}