interface IUser2 {
  name: string;
  age: number;
}

const makeUser = (): IUser2 => {
  return {
    name: "Mario",
    age: 47,
  };
};
