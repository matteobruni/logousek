import RouteWrapper from "../../../helpers/route-wrapper";
import Link from "next/link";
import { NotFoundPageWrapper } from "./styled";

export default function NotFoundPage() {
  return (
    <RouteWrapper>
      <NotFoundPageWrapper>
        <h1>Nic nenalezeno</h1>
        <Link href="/">Zpět na úvod</Link>
      </NotFoundPageWrapper>
    </RouteWrapper>
  );
}
