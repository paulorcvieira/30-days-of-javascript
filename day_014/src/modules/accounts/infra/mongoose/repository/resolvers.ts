import User from '../schemas/User';

type UserProps = {
  id: string;
  name: string;
  email: string;
}

export default {
  Query: {
    users: () => User.find(),
    user: (_: unknown, { id }: UserProps) => User.findById(id)
  },
  Mutation: {
    createUser: (_: unknown, { name, email }: UserProps) =>
      User.create({ name, email }),
  }
};