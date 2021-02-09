const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(list1, list2) {
  const listCombined = [];
  let list1Index = 0;
  let list2Index = 0;
  let combinedIndex = 0;
  while (list1Index < list1.length && list2Index < list2.length) {
    listCombined[combinedIndex++] = list1[list1Index++];
    listCombined[combinedIndex++] = list2[list2Index++];
  }
  return listCombined;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listA, listB));
