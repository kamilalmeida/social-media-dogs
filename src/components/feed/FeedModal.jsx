import React from "react";
import { PHOTOS_GET } from "../../api";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../helper/Error";
import { Loading } from "../helper/Loading";
import {PhotoContent} from "../photo/PhotoContent"

export function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className="modal">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
