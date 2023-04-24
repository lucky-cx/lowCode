interface OptionNode {
  displayName: string;
  value: string;
}

interface MateriaNode {
  displayName: string;
  ctype: string;
  value: string | number;
  options: OptionNode[]; // 支持数组，作为选项值，比如 select 组件，单选组件等
  child: M_FieldNode;
}

type M_FieldNode = Record<string, Partial<MateriaNode>>;

interface MateriaNode {
  displayName: string;
  name: string;
  icon: string;
  ctype: string;
  fields: M_FieldNode;
}

interface ENode {
  displayName: string;
  name: string;
  icon: string;
  ctype: string;
  [key: string]: any;
}

interface EPage {
  title: string;
  child: ENode[];
  [key: string]: any;
}
