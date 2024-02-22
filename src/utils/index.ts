export const cropText = (text: string) => {
  if (text.length > 247) return text.slice(0, 247) + '...';

  return text;
};

export const parseToBRL = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
};

export const getTotalPrice = (items: Product[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.preco) return (acc += currentItem.preco);

    return 0;
  }, 0);
};
