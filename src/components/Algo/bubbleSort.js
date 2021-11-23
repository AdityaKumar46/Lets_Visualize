export function getBubbleSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    const n = copy.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([[i, j], false]);
            animations.push([[j, j+1], false]);
            if (copy[j] > copy[j + 1]) {
                animations.push([[j, copy[j+1]], true]);
                animations.push([[j+1, copy[j]], true]);
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;

            }
        }

    }

    return animations;
}