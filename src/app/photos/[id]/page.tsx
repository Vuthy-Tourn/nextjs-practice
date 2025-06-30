import Link from "next/link";
import photos, { PhotoType } from "@/data/photos";
import PhotoCard from "@/components/photos/PhotoCard";
import { PageProps } from "@/types/ParamType";

export default async function PhotoPage({ params }: PageProps) {
  const { id } = await params;
  const photo: PhotoType = photos.find((p) => p.id === id)!;

  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link
            href="/photos"
            className="font-semibold italic text-sky-600 underline"
          >
            Back to photos
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  );
}
