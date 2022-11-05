import Tree from "../components/Tree/Tree";
import { getTreeData } from "../components/Tree/utils";

export default function Home({ treeData }: TreeDataProp) {
  return <Tree treeData={treeData} />;
}

export async function getStaticProps() {
  return {
    props: {
      treeData: getTreeData(),
    },
  };
}
