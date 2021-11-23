export function getInsertionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    let key, j;
    for (let i = 1; i < copy.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0) {
            animations.push([[j, j+1], false]);
            if (arr[j] > key) {
                animations.push([j+1, arr[j]], true);
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            else {
                break;
            }
        }
        animations.push([j+1, key], true);
        arr[j + 1] = key;
    }
    return animations;
}