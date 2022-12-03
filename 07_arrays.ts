//type Role = "user" | "admin";

interface IPost {
  id: number;
  title: string;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  posts: IPost[];
  // posts: Array<IPost>;
}

const mary: IUser = {
  id: 0,
  firstName: "",
  lastName: "",
  role: "admin",
  posts: [{ id: 1, title: "post " }],
};
