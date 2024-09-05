type Item = {
  id: string;
};

type ListProps<T> = {
  element: React.FC<T>
  items: (Item & T)[];
};

const List = <T,>({ element: Element, items }: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
