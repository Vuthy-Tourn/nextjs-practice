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
        user?.firstName && user?.lastName
          ? `${user.firstName} ${user.lastnName}`
          : user?.title ?? "User Detail",
      description: user?.email ?? "",
      openGraph: {
        title:
          user?.firstName && user?.lastName
            ? `${user.firstName} ${user.lastName}`
            : user?.title,
        description: user?.email,
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
