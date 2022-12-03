type Role = "admin" | "user" | "super-admin";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}

const mario: IUser = {
  id: 1,
  firstName: "Mario",
  lastName: "Lazzari",
  role: "admin",
};
