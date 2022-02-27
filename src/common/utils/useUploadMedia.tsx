import { ChangeEventHandler, useState } from "react";
import AWS from "aws-sdk";

import { IMedia } from "common/types";
import { serverRequest } from "common/utils";
import { useCurrentUser } from "auth";
import styles from "./useUploadMedia.module.scss";

interface IUseUploadMediaProps {
  equipment_id?: string;
  ingredient_id?: string;
  method_id?: string;
  recipe_id?: string;
  recipe_step_id?: string;
}

const s3 = new AWS.S3({
  accessKeyId: process.env.MEDIA_SERVICE_ACCESS_KEY_ID,
  secretAccessKey: process.env.MEDIA_SERVICE_ACCESS_SECRET,
  region: process.env.MEDIA_SERVICE_REGION,
});

export const useUploadMedia = (attachmentIds: IUseUploadMediaProps = {}) => {
  const { user } = useCurrentUser();
  const [error, setError] = useState<string>();
  const [media, setMedia] = useState<IMedia>();
  const [uploadStatus, setLifecycle] = useState<
    "idle" | "uploading" | "complete" | "error"
  >("idle");

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const files = event.target.files;
    if (files && files.length) {
      setLifecycle("uploading");
      try {
        console.log(
          process.env.MEDIA_SERVICE_BUCKET,
          process.env.MEDIA_SERVICE_ACCESS_KEY_ID,
          process.env.MEDIA_SERVICE_ACCESS_SECRET,
          process.env.MEDIA_SERVICE_REGION
        );
        const data = await s3
          .upload({
            Bucket: process.env.MEDIA_SERVICE_BUCKET!,
            Key: `${user.id}/${files[0].name}`,
            Body: files[0],
          })
          .promise();
        const media = await serverRequest.POST<IMedia>("/media", {
          ...attachmentIds,
          url: data.Location,
          user_id: user.id,
        });
        setMedia(media);
        setLifecycle("complete");
      } catch (err) {
        setError(err.message);
        setLifecycle("error");
      }
    }
  };

  const UploadArea = () => {
    switch (uploadStatus) {
      case "idle":
        return (
          <div className={styles.uploadArea}>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleImageSelect}
            />
          </div>
        );
      case "uploading":
        return (
          <div className={styles.uploadArea}>
            <img
              className={styles.loadingIcon}
              src="/images/loader.svg"
              alt="loading"
            />
          </div>
        );
      case "complete":
        return (
          <div className={styles.uploadArea}>
            <img
              className={styles.uploadedMedia}
              src={media.url}
              alt="uploaded media preview"
            />
          </div>
        );
      case "error":
        return (
          <div className={styles.uploadArea}>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleImageSelect}
            />
          </div>
        );
    }
  };

  return { UploadArea, uploadStatus, error, media };
};
