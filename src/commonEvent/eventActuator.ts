import { COMMON_EVENT_NAME, COMMON_EVENT_TYPE } from "../config/modelTypes/index";

const alertHandler = () => {};
const openHandler = () => {};

const eventOptions = {
  [COMMON_EVENT_TYPE.ALERT]: alertHandler,
  [COMMON_EVENT_TYPE.OPEN]: openHandler,
};

export function actuator(ev: object) {
  console.log("actuator -->", ev);
}

export function initCommonEvent(Evenbus: any) {
  Evenbus.on(COMMON_EVENT_NAME.COMMON, actuator);
}
