type Name = {
  first: string;
  last?: string;
};

const getName = ({ first, last }: Name): string => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
