type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};
function updateUser(user: User, updates: Partial<Omit<User, 'id'>>): User {
  const allowedUpdates: (keyof Omit<User, 'id'>)[] = ['name', 'email', 'age'];
  const newUser = { ...user }; 
  for (const key of allowedUpdates) {
    if (key in updates) {
      (newUser as any)[key] = updates[key];
    }
  }
  return newUser;
}
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const updates = {
  name: "Alice Johnson",
};

console.log(updateUser(user, updates))