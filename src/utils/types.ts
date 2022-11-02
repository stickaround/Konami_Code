export type Issue = {
  title: string;
  user: {
    login: string;
  };
  created_at: string | number;
};
