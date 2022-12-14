function productOfArray(arr: number[]): number {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

[1, 2, 3, 10];
