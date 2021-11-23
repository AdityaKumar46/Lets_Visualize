export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = [...array];
    heapSort(auxiliaryArray, auxiliaryArray.length, animations);
    return animations;
  }

  const minHeapify = (arr, n, animations) => {
    for(let i = 1; i < n; i++){
      //If child is greater than parent
      animations.push([[i, (i-1)/2], false])
      if(arr[i] < arr[parseInt((i - 1) / 2)]){
        let j = i;
        animations.push([[j], false])
        
        // swap child and parent until 
        // parent is smaller
        while (arr[j] < arr[parseInt((j - 1) / 2)]) {
            //Get the indexes of both the child
            const l = j;
            const r = parseInt((j - 1) / 2);
            animations.push([[l, r], false]);
            
            //Swap
            animations.push([[l, arr[r]], true]);
            animations.push([[r, arr[l]], true]);
            [arr[l], arr[r]] = [arr[r], arr[l]];
            
            //reduce
            j = parseInt((j - 1) / 2); 
        } 
      }
    }
  }
  
  const heapSort = (arr, n = arr.length, animations) => {
    minHeapify(arr, n);
    
    for(let i = n - 1; i > 0; i--){
        animations.push([[i], false])
      // swap value of first indexed 
      // with last indexed 
        animations.push([[0, arr[i]], true]);
        animations.push([[i, arr[0]], true]);
      [arr[0], arr[i]] = [arr[i], arr[0]]; 
    
      // maintaining heap property 
      // after each swapping 
      let j = 0, index; 
      
      do { 
          index = (2 * j + 1); 
    
          // if left child is smaller than 
          // right child point index variable 
          // to right child 
          if (index < (i - 1) && arr[index] > arr[index + 1]) {
            index++; 
            animations.push([[index], false]);
          }
    
          // if parent is smaller than child 
          // then swapping parent with child 
          // having higher value 
          if (index < i && arr[j] > arr[index]) {
            animations.push([[j, arr[index]], true]);
            animations.push([[index, arr[j]], true]);
            [arr[j], arr[index]] = [arr[index], arr[j]];
          }
        
          j = index; 
        } while (index < i); 
    }
  }

  /**function HeapSortHelper( arr, animations)
    {
        var n = arr.length;
 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        {
            animations.push([[i], false]);
            animations.push(heapify(arr, n, i, animations));
            animations.push([[i], false]);
        }
 
        for (let i = n - 1; i > 0; i--) {
            animations.push([[0, i], false]);
            animations.push([[0, arr[i]], true]);
            animations.push([[i, arr[0]], true]);
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            animations.push(heapify(arr, i, 0, animations));
            console.log("1", animations)
            //heapify(arr, i, 0, animations);
            animations.push([[0, i], false]);
        }
    }
  
    function heapify(arr, n, i)
    {
        const am=[];
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        am.push([[i], false]);
        am.push([[largest], false]);
        am.push([[l, r], false]);

        if (l < n && arr[l] > arr[largest])
        {
            am.push([[l, largest], true]);
            largest = l;
        }
 
        if (r < n && arr[r] > arr[largest])
        {
            am.push([[r, largest], false]);
            largest = r;
        }
 
        if (largest !== i) {
            am.push([[i, arr[largest]], true]);
            am.push([[largest, arr[i]], true]);
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
        }
        console.log(am)
        return am;
    }
    */