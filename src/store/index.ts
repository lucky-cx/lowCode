import { counter } from "./counter";
import { material } from "./material";

const appStore: any = {};

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.counter = counter();
  appStore.material = material();
};

export default appStore;
