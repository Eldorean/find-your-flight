type Item<T> = T & {
  id: string;
};

type Element<T> = Omit<T, 'rowNumber'> & {
  rowNumber: number;
};

type ListProps<T> = {
  element: React.FC<Element<T>>
  items: Item<T>[];
};

const List = <T,>({ element: Component, items }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => (
        <Component key={item.id} rowNumber={index} {...item} />
      ))}
    </div>
  );
};

export default List;
