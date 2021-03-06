export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([[i], false]);
      
      animations.push([[j], false]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        
        animations.push([[k, auxiliaryArray[i]], true]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        
        animations.push([[k, auxiliaryArray[j]], true]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      
      animations.push([[i, i], false]);
      
     // animations.push([[i, i], false]);
      
      animations.push([[k, auxiliaryArray[i]], true]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      
      animations.push([[j, j], false]);
      
      animations.push([[k, auxiliaryArray[j]], false]);
      animations.push([[k, auxiliaryArray[j]], true]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

/**export function getMergeSortAnimations(arr) {
  const copy = [...arr];
  const len = copy.length;
  const aux = Array(len);
  const animations = [];
  mergeSortHelper(copy, aux, 0, len - 1, animations);
  return animations;
}

function mergeSortHelper(arr, aux, left, right, animations) {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  mergeSortHelper(arr, aux, left, mid, animations);
  mergeSortHelper(arr, aux, mid + 1, right, animations);
  merge(arr, aux, left, mid, right, animations);
}

function merge(arr, aux, left, mid, right, animations) {
  for (let i = left; i <= right; i++) aux[i] = arr[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animations.push([[j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else if (j > right) {
      animations.push([[i], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      animations.push([[i, j], false]);
      animations.push([[k, aux[j]], true]);
      arr[k] = aux[j++];
    } else {
      animations.push([[i, j], false]);
      animations.push([[k, aux[i]], true]);
      arr[k] = aux[i++];
    }
  }
}
*/