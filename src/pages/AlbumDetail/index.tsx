import { AlbumDetailProvider } from "./context";
import AlbumDetailPage from "./page";

export default function AlbumDetail() {
  return (
    <AlbumDetailProvider>
      <AlbumDetailPage />
    </AlbumDetailProvider>
  );
}
