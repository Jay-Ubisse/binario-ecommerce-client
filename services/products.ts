import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts(): Promise<ProductsProps[] | undefined> {
  try {
    const response = await axios.get<ProductsProps[]>(
      `${baseUrl}/products/all`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
