import { ProductType } from "@/types/ProductType";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { UserType } from "@/types/UserType";

async function getData(): Promise<ProductType[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}products`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 px-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
