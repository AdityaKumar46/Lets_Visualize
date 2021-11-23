export function getQuickSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    quickSortHelper(copy, 0, copy.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(arr, left, right, animations) {
    if (right <= left) return;
    const part = partition(arr, left, right, animations);
    quickSortHelper(arr, left, part, animations);
    quickSortHelper(arr, part + 1, right, animations);
  }
  
  function partition(arr, left, right, animations) {
    let i = left-1;
    let j = right + 1;
    const pivot = arr[left];
    while (true) {
      while (arr[++i] <= pivot) {
        if (i === right) break;
        animations.push([[i], false]);
      }
      while (arr[--j] >= pivot) {
        if (j === left) break;
        animations.push([[j], false]);
      }
      if (j <= i) break;
      animations.push([[i, arr[j]], true]);
      animations.push([[j, arr[i]], true]);
      //swap(arr, i, j);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    animations.push([[left, arr[j]], true]);
    animations.push([[j, arr[left]], true]);
    //swap(arr, left, j);
    const temp = arr[left];
      arr[left] = arr[j];
      arr[j] = temp;
    return j;
  }
  

  /**function partition(arr, lb, ub, animations)
  {
    let i=lb-1;
		let j=ub+1;
		const pivot=arr[lb];
		while(true)
		{
			do {
        animations.push([[i], false]);
				i++;
			}while(arr[i]<pivot);
			
			do {
        animations.push([[j], false]);
				j--;
			}while(arr[j]>pivot);
			
			if(i>=j)
			{
				break;
			}
      animations.push([[i, arr[j]], true]);
      animations.push([[j, arr[i]], true]);
			const temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
  }
    animations.push([[lb, arr[j]], true]);
    animations.push([[j, arr[lb]], true]);
    //swap(arr, left, j);
    const temp = arr[lb];
      arr[lb] = arr[j];
      arr[j] = temp;
    return j;
}
*/