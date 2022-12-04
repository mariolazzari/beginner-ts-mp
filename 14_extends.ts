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
