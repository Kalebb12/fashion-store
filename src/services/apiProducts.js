import supabase from "./supabase";

export const getProducts = async () => {
  let { data: products, error } = await supabase.from("products").select("*");

  if (error){ 
    console.log(error.message)
    throw new Error(error.message)
  };

  return products
};
