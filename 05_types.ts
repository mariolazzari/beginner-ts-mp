interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

const defaultUser: User = {
  id: 1,
  firstName: "Mario",
  lastName: "Lazzari",
  isAdmin: false,
};

const getUserId = (user: User): number => user.id;

const id: number = getUserId(defaultUser);
console.log(id);
