import Modal from "@/components/photos/Modal";
import PhotoCard from "@/components/photos/PhotoCard";
import photos, { PhotoType } from "@/data/photos";

export default async function PhotoModal(props: { params: { id: string } }) {
  const { id } = await Promise.resolve(props.params);
  const photo: PhotoType = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
