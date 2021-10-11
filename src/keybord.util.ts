export const convertKeyToArr = (key: string) => {
  return key.split('+').map((item: any) => item?.trim()?.toLowerCase()).filter((item: any) => item !== null && item !== '');
}
export const checkEvents = (e: any, arKeys: any, stopEvent: boolean = true) => {
  let event = window.event ? window.event : e;
  const isShift = arKeys.indexOf('shift') >= 0;
  const isAlt = arKeys.indexOf('alt') >= 0;
  const isCtrl = arKeys.indexOf('ctrl') >= 0;
  if (!event) return false;
  let flg = true;
  if (isShift && !event.shiftKey) {
    flg = false;
  }
  if (isAlt && !event.altKey) {
    flg = false;
  }
  if (isCtrl && !event.ctrlKey) {
    flg = false;
  }
  let key = event.key.trim().toLowerCase();
  if (key == "") {
    key = event.code.trim().toLowerCase();
  }
  if (['shift', 'control', 'alt', 'command'].includes(key) || arKeys.indexOf(key) < 0) {
    flg = false;
  }
  if (flg === true && stopEvent === true) {
    event.preventDefault();
    event.stopPropagation();
  }
  return flg;
}
