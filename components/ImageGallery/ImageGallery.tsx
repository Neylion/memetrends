import { Fragment, useState } from "react";
import { IImage } from "../../interfaces/meme";
import styles from "./ImageGallery.module.scss";

function getImageElements(images: IImage[], setFullViewImage: (image: IImage) => void) {
  return images.map((image) => {
    return (
      <div key={`gallery-item-${image.id}`} className={styles.imageGalleryItem}>
        <Image {...image} onClick={() => setFullViewImage(image)} />
      </div>
    );
  });
}

export default function ImageGallery({ images }: { images: IImage[] }) {
  const [fullViewImageProps, setFullViewImage] = useState<IImage | null>(null);
  const imageElements = getImageElements(images, setFullViewImage);
  return (
    <Fragment>
      {fullViewImageProps ? (
        <ImagePopup
          imageProperties={fullViewImageProps}
          closePopup={() => setFullViewImage(null)}
        />
      ) : null}
      <div className={styles.imageGallery}>{imageElements}</div>
    </Fragment>
  );
}

type ImagePopupProps = {
  imageProperties: IImage;
  closePopup: () => void;
};
function ImagePopup({ imageProperties, closePopup }: ImagePopupProps) {
  return (
    <div className={styles.imagePopup} onClick={closePopup}>
      <div>
        <h1 className={styles.imagePopupHeader}>Close by clicking anywhere</h1>
        <Image {...imageProperties} onClick={closePopup} />
      </div>
    </div>
  );
}

interface ImageProps extends IImage {
  onClick: () => void;
}
function Image({ link, alt, onClick }: ImageProps) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={link} alt={alt} onClick={() => onClick()} />
    </div>
  );
}
