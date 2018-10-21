export default function findWithAttr(array: any[], attr: string, value: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}
