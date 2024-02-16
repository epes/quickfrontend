import { Outlet } from "react-router-dom";
import { Health } from "../components/Health.component";

export function Root() {
  return (
    <>
      <Health />
      <Outlet />
    </>
  );
}
