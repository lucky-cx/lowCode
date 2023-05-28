import { COMMON_EVENT_NAME, COMMON_EVENT_TYPE } from "../config/modelTypes/index";
import type { CommonEventModel } from "../config/modelTypes/index";

const alertHandler = (ev: any) => {
  const message = ev?.data?.message || "";
  window.alert(message);
};
const openHandler = (ev: any) => {
  const address = ev?.data?.address || "";
  window.open(address);
};

const eventOptions = {
  [COMMON_EVENT_TYPE.ALERT]: alertHandler,
  [COMMON_EVENT_TYPE.OPEN]: openHandler,
};

export function actuator(ev: CommonEventModel) {
  const handler = eventOptions[ev.type];
  // console.log("ev.type -->", ev.type, "handler-->", handler);

  createAsyncTask(handler, ev)
    .then(res => console.log("弹窗后的操作", res))
    .catch((error) => {
      console.log(error);
    });
}

export function initCommonEvent(Evenbus: any) {
  Evenbus.on(COMMON_EVENT_NAME.COMMON, actuator);
}

// 把同步的任务转成异步任务
// Promise.resolve(value) 方法返回一个以给定值解析后的 Promise对象。
// 在then中会执行传入的这个函数（参数syncTask2自定义可以修改）

function createAsyncTask(task: any, params: object) {
  return Promise.resolve(task).then((syncTask2): any => syncTask2(params));
}
