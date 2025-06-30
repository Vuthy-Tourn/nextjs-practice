import Modal from "@/components/photos/Modal";
import PhotoCard from "@/components/photos/PhotoCard";
import photos, { PhotoType } from "@/data/photos";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const { id } = params;
  const photo: PhotoType = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
