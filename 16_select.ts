// https://www.typescriptlang.org/docs/handbook/utility-types.html
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type MyTypeOmit = Omit<User, "id">;
type MyTypePick = Pick<User, "firstName" | "lastName">;
