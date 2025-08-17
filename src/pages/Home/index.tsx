import { HomeProvider } from "./context";
import HomePage from "./page";

export default function Home() {
  return (
    <HomeProvider>
      <HomePage />
    </HomeProvider>
  );
}
