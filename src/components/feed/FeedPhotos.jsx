import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";

export function FeedPhotos() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
  }, []);
  return <div></div>;
}
