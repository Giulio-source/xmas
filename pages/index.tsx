import Head from "next/head";
import Link from "next/link";
import { Card } from "../components/commons/Card";
import { Grid } from "../components/commons/Grid";
import { notoFont } from "../components/commons/Theme";
import { IndexPageWrapper } from "../page-styles/index-page.style";

export default function Home() {
  return (
    <IndexPageWrapper className={notoFont.className}>
      <Grid>
        <Card>
          <Link href="/risultati/esaltato">
            <h2>Esaltato 😁</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/risultati/felice">
            <h2>Felice 🥳</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/risultati/indifferente">
            <h2>Indifferente 😑</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/risultati/odioso">
            <h2>Odioso 🤬</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/risultati/scazzato">
            <h2>Scazzato 😒</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/risultati/ansioso">
            <h2>Ansioso 😰</h2>
          </Link>
        </Card>
        <Card>
          <Link href="/mappa">
            <h2>Mappa 🌍</h2>
          </Link>
        </Card>
      </Grid>
    </IndexPageWrapper>
  );
}
