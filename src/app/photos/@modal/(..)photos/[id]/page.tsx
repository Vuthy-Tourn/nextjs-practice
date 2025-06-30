import Modal from "@/components/photos/Modal";
import PhotoCard from "@/components/photos/PhotoCard";
import photos from "@/data/photos";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PhotoModal({ params }: PageProps) {
  const {id} = await params
  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
