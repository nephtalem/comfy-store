import { useEffect } from "react";
import { Hero } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

import FeaturedProducts from "../components/FeaturedProducts";

const url = "products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
  const products = response.data.data;
  return { products };
};
const Landing = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
