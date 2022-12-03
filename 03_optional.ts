type Name = {
  first: string;
  last?: string;
};

const getName = ({ first, last }: Name) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
