import React from "react";
import { PHOTOS_GET } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../helper/Error";
import { Loading } from "../helper/Loading";
import { PhotoContent } from "../photo/PhotoContent";

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.currentTarget === event.target) setModalPhoto(null);
  }
  return (
    <div className="modal" onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
