const withoutProperties = (obj: Record<string, unknown>, properties: string[]) => {  
  let res = obj;

  for (const property of properties) {
    const { [property]: unused , ...rest } = res;
    res = rest;
  }

  return res;
}

export { withoutProperties };
