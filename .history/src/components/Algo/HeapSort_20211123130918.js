export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    HeapSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  
  