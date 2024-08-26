import React from "react";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid Photo ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <img src={image.url} alt="gallery-image" className="w-96" />
    </Modal>
  );
}
