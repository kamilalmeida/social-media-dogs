import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import { FeedPhotosItems } from "./FeedPhotoItems";
import Error from "../helper/Error";
import { Loading } from "../helper/Loading";
import * as C from "../../styles/global";

export function FeedPhotos({ setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading error={error} />;
  if (data)
    return (
      <C.AnimeLeft>
        <ul className="listphoto">
          {data.map((photo) => (
            <FeedPhotosItems
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </C.AnimeLeft>
    );
  else return null;
}
