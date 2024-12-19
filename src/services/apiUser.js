import supabase from "./supabase";

export const login = async ({ email, password }) => {
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(user);
  return user;
};
