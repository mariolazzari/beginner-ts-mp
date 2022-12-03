const getName = (first: string, last?: string): string => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
