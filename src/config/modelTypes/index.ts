interface OptionNode {
  label: string;
  value: string;
}

interface MateriaNodeField {
  label: string;
  ctype: string;
  value: string | number;
  options: OptionNode[]; // 支持数组，作为选项值，比如 select 组件，单选组件等
  child: M_FieldNode;
}

type M_FieldNode = Record<string, Partial<MateriaNodeField>>;

interface MateriaNode {
  label: string;
  name: string;
  icon: string;
  ctype: string;
  fields: M_FieldNode;
}

interface M_Field_Init {
  label: string;
  name: string;
  icon: string;
  ctype: string;
  [key: string]: any;
}
