interface ID {
  id: string;
}

interface User extends ID {
  firstName: string;
  lastname: string;
}

interface Post extends ID {
  id: string;
  title: string;
  body: string;
}

interface Comment extends ID {
  id: string;
  comment: string;
}

/*
interface UserReturn extends User {
  posts: Post[];
}
*/

// intersect
type UserReturn = User & { posts: Post[] };

const getDefaultUserAndPosts = (): UserReturn => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};
