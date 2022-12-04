interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type CreateUser = () => Promise<string>;
type GetUser = (id: string) => Promise<User>;

const createThenGetUser = async (
  createUser: CreateUser,
  getUser: GetUser
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};
