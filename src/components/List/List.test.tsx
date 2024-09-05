import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import { Item } from './List.types';

const MockComponent: React.FC<Item> = ({ id }) => <div>{id}</div>;

describe('List', () => {
  const items: (Item & { foo: string })[] = [
    { id: '1', foo: 'foo1' },
    { id: '2', foo: 'foo2' },
    { id: '3', foo: 'foo3' },
  ];

  it('renders the list of items', () => {
    const { container } = render(
      <List element={MockComponent} items={items} />
    );

    items.forEach((item) => {
      expect(container).toHaveTextContent(item.id);
    });
  });
});



