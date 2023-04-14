import { MATERIAL_TO_COMPENT, M_ATTRS_TO_COMPENT } from "../../constant/MateriaRenderEnum";

// export const data: MateriaNode = {
export default {
  label: "输入Plus",
  name: "m_text_plus",
  icon: "edit-1",
  ctype: MATERIAL_TO_COMPENT.TEXT, // 对应中间画布渲染组件
  fields: {
    title: {
      label: "文本输入",
      ctype: M_ATTRS_TO_COMPENT.TEXT,
      value: "LOWCODE TEXT",
    },
    model: {
      label: "布局选择",
      ctype: M_ATTRS_TO_COMPENT.SELECT,
      value: "left",
      options: [
        {
          label: "居左",
          value: "left",
        },
        {
          label: "居中",
          value: "center",
        },
      ],
    },
    styles: {
      label: "标题样式",
      ctype: M_ATTRS_TO_COMPENT.OBJECT,
      child: {
        titleSize: {
          label: "标题字体",
          ctype: M_ATTRS_TO_COMPENT.NUMBER,
          value: 20,
        },
        titleColor: {
          label: "标题颜色",
          ctype: M_ATTRS_TO_COMPENT.TEXT,
          value: "#333333",
        },
      },
    },
  },
};

/***
 *  需要处理成这种结构
 *
 * const testData = {
  title: "LOWCODE TEXT",
  model: "left",
  styles: {
    titleSize: 20,
    titleColor: "#333333",
  },
};
 *
 *
 */
