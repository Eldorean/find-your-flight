import sortBykey from './sortBykey';

describe('sortBykey', () => {
  it('should sort objects by the specified number key in ascending order', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
    ];

    const sortedData = data.sort(sortBykey('age', 'asc'));

    expect(sortedData).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 35 },
    ]);
  });

  it('should sort objects by the specified number key in descending order', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
    ];

    const sortedData = data.sort(sortBykey('age', 'desc'));

    expect(sortedData).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
    ]);
  });

  it('should sort objects by the specified string key in ascending order', () => {
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
    ];

    const sortedData = data.sort(sortBykey('name', 'asc'));

    expect(sortedData).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
      { name: 'John', age: 30 },
    ]);
  });
});