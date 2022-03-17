const sleep = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { sleep };
