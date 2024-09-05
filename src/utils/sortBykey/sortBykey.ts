const sortBykey = <T extends Record<string, unknown>>(key: keyof T) => (a: T, b: T) => {
  return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
}

export default sortBykey;