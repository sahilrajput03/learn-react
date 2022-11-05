import nestedTreeData from "./nestedTreeData.json";
import shagunTreeData from "./nestedTreeData2";
let l = console.log;

const fun = (parentId) => (acc, item) => {
  // console.log(item);
  const currentItem = { text: item.name, hasChildren: item.isDirectory, id: item.id, parentId };

  let nestedItems = [];
  if (item.isDirectory && item.items.length > 0) {
    nestedItems = item.items.reduce(fun(item.id), []);
  }

  return [...acc, currentItem, ...nestedItems];
};

// @ts-ignore
let desiredShape = shagunTreeData.reduce(fun(0), []);
// console.log("myDesired", desiredShape);

// ? OUR CUSTOM CODE
export function getTreeData(): TreeDataItem[] {
  return desiredShape;
}

// ? ORIGINAL CODE FROM ARTICLE.
export function getTreeData_ORIGINAL(): TreeDataItem[] {
  const returnValue = nestedTreeData.map((item) => ({
    ...item,
    hasChildren: nestedTreeData.filter((i) => i.parentId === item.id).length > 0,
  }));

  l("myOriginal", returnValue);
  return returnValue;
}
