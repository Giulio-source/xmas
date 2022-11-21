import Head from "next/head";
import Image from "next/image";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { PageWrapper } from "../../page-styles/esaltato.style";

export default function Home() {
  return (
    <PageWrapper>
      <Esaltato/>
    </PageWrapper>
  );
}
