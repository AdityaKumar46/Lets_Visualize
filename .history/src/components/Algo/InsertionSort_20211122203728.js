export function getInsertionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    let key, j; 
    for (let i = 1; i < copy.length; i++) {
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    }
    return animations;
  }