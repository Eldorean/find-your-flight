
type Obj = Record<string, unknown>;
type SortDirection = 'asc' | 'desc';

const ascending = <T extends Obj>(key: keyof T) => (a: T, b: T) => 
  a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;

const descending = <T extends Obj>(key: keyof T) => (a: T, b: T) =>
  a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;

const directionMap = {
  asc: ascending,
  desc: descending
};

const sortBykey = <T extends Obj>(key: keyof T, direction: SortDirection) => (a: T, b: T) => 
  directionMap[direction](key)(a, b);

export default sortBykey;