import { MATERIAL_TO_COMPENT, M_ATTRS_TO_COMPENT } from "../../constant/MateriaRenderEnum";

// export const data: MateriaNode = {
export default {
  displayName: "图片",
  name: "m_image",
  icon: "edit-1",
  ctype: MATERIAL_TO_COMPENT.IMAGE, // 对应中间画布渲染组件
  fields: {
    value: {
      displayName: "图片地址",
      ctype: M_ATTRS_TO_COMPENT.TEXT,
      value: "https://www.baidu.com/img/flexible/logo/pc/result.png",
      // value: "",
    },
    shape: {
      displayName: "圆角类型",
      ctype: M_ATTRS_TO_COMPENT.SELECT,
      value: "round",
      options: [
        {
          displayName: "circle",
          value: "circle",
        },
        {
          displayName: "round",
          value: "round",
        },
        {
          displayName: "square",
          value: "square",
        },
      ],
    },

    styles: {
      displayName: "标题样式",
      ctype: M_ATTRS_TO_COMPENT.OBJECT,
      child: {
        width: {
          displayName: "图片宽",
          ctype: M_ATTRS_TO_COMPENT.TEXT,
          value: "200px",
        },
        height: {
          displayName: "图片宽",
          ctype: M_ATTRS_TO_COMPENT.TEXT,
          value: "120px",
        },
      },
    },

    // fit: {
    //   displayName: "填充模式",
    //   ctype: M_ATTRS_TO_COMPENT.SELECT,
    //   value: "cover",
    //   options: [
    //     {
    //       displayName: "fill",
    //       value: "fill",
    //     },
    //     {
    //       displayName: "contain",
    //       value: "contain",
    //     },
    //     {
    //       displayName: "cover",
    //       value: "cover",
    //     },
    //     {
    //       displayName: "scale-down",
    //       value: "scale-down",
    //     },
    //   ],
    // },
  },
};
