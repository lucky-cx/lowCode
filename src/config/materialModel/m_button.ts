import { MATERIAL_TO_COMPENT, M_ATTRS_TO_COMPENT } from "../../constant/MateriaRenderEnum";

// export const data: MateriaNode = {
export default {
  displayName: "按钮",
  name: "m_button",
  icon: "edit-1",
  ctype: MATERIAL_TO_COMPENT.BUTTON, // 对应中间画布渲染组件
  fields: {
    value: {
      displayName: "文本输入",
      ctype: M_ATTRS_TO_COMPENT.TEXT,
      value: "测试按钮",
    },

    typeCode: {
      displayName: "按钮类型",
      ctype: M_ATTRS_TO_COMPENT.SELECT,
      value: "alert",
      options: [
        {
          displayName: "alert",
          value: "alert",
        },
        {
          displayName: "open",
          value: "open",
        },
      ],
    },
    message: {
      displayName: "弹窗内容",
      ctype: M_ATTRS_TO_COMPENT.TEXT,
      value: "弹窗测试内容",
      editor: {
        hide: "context.typeCode === 'alert'",
      },
    },

    address: {
      displayName: "新开地址",
      ctype: M_ATTRS_TO_COMPENT.TEXT,
      value: "http://wwww.baidu.com",
      editor: {
        hide: "context.typeCode === 'open'",
      },
    },

    preView: {
      displayName: "预览",
      ctype: M_ATTRS_TO_COMPENT.PREVIEWBUTTON,
      value: "预览",
    },
  },
};
