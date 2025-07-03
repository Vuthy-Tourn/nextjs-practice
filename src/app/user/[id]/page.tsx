/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import UserDetailPage from "./UserDetailPage";
import { PageProps } from "@/types/ParamType";

export async function generateMetadata(
  // ✅ Let Next.js infer the correct type
  props: any
): Promise<Metadata> {
  const { params } = props;

  try {
    const res = await fetch(`${process.env.BASE_URL}users/${params.id}`);
    if (!res.ok) {
      return { title: "User not found" };
    }

    const user = await res.json();

    return {
      title:
        user?.firstname && user?.lastname
          ? `${user.firstname} ${user.lastname}`
          : user?.title ?? "User Detail",
      description: user?.description ?? "",
      openGraph: {
        title:
          user?.firstname && user?.lastname
            ? `${user.firstname} ${user.lastname}`
            : user?.title,
        description: user?.description,
        images: [user?.image],
      },
    };
  } catch {
    return {
      title: "User not found",
    };
  }
}

export default function page({ params }: PageProps) {
  return <UserDetailPage params={params} />;
}
