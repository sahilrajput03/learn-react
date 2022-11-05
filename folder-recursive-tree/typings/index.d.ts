type TreeDataItem = {
  id: number;
  text: string;
  parentId: number;
  hasChildren: boolean;
};

type TreeDataProp = {
  treeData: TreeDataItem[];
};

type TreeProps = {
  treeData: TreeDataItem[];
  parentId?: number;
  level?: number;
};

type RowProps = {
  item: TreeDataItem;
  level: number;
  children: React.ReactNode;
};
