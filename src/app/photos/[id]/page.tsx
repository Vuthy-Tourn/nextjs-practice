import Link from "next/link";
import photos, { PhotoType } from "@/data/photos";
import PhotoCard from "@/components/photos/PhotoCard";

export default async function PhotoPage(props: { params: { id: string } }) {
  const { id } = await Promise.resolve(props.params);

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

