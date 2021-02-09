const listA = ['a', 'b', 'c', 'd'];
const listB = [1, 2, 3];

function zipList(list1, list2) {
  const listCombined = [];
  let list1Index = 0;
  let list2Index = 0;
  while (list1Index < list1.length) {
    listCombined.push(list1[list1Index++]);
    if (list2Index < list2.length) {
      listCombined.push(list2[list2Index++]);
    }
  }

  if (list2Index < list2.length) {
    while (list2Index < list2.length) {
      listCombined.push(list2[list2Index++]);
    }
  }
  return listCombined;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2) {
  return _.reject(_.flatten(_.zip(list1, list2)), (item) => item === undefined);
}

console.log(zipListTheSimpleWay(listA, listB));
