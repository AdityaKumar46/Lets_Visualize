
export function getbubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSort(array, array.length, auxiliaryArray, animations);
    return animations;
  }

function swap(arr, auxiliaryArray, xp, yp) {
    var temp = auxiliaryArray[xp];
    auxiliaryArray[xp] = auxiliaryArray[yp];
    auxiliaryArray[yp] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n, auxiliaryArray, animations) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            auxiliaryArray.push([i, j]);
            auxiliaryArray.push([i, j]);

            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                auxiliaryArray.push([j, j+1]);
                swap(arr, auxiliaryArray, j, j + 1);

            }
        }

    }
}



