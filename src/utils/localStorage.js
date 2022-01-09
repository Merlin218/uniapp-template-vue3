// ? 策略模式重构一下？

export function setLocalStorage(key, content) {
  if (!key) {
    console.log('请输入设置的名字');
    return;
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  try {
    uni.setStorageSync(key, content);
  } catch (e) {
    // 处理错误
    console.log('存储失败： ' + e);
  }
}

export function getLocalStorage(key) {
  if (!key) {
    console.log('请输入要获取的key');
    return;
  }
  try {
    const data = uni.getStorageSync(key);
    if (data) {
      // console.log("拿到了...");
      return data;
    }
  } catch (e) {
    // 处理错误
    console.log('获取错误： ' + e);
  }
}

export function removeLocalStorage(key) {
  if (!key) {
    console.log('请输入要清除的key');
    return;
  }
  try {
    uni.removeStorageSync(key);
  } catch (e) {
    // 处理错误
    console.log('删除错误： ' + e);
  }
}
