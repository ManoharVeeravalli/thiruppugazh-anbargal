import Head from "next/head";
import theme from "../lib/theme";

export default function Metatags({
  title = "Thiruppugazh Anbargal",
  description = "Guruji Sri AS Raghavan has had a life of miracles. He was an extraordinary man, recognized by one and all as superhuman and as an evolved soul.",
  image = "https://firebasestorage.googleapis.com/v0/b/thiruppugazhanbargal-515e8.appspot.com/o/thiruppugazh-anbargal%2FWebp.net-compress-image.jpg?alt=media&token=43f6c5f4-a9a8-40bc-a79a-e472a6a4fdac",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Murali Manohar" />
      <meta name="theme-color" content={theme.palette.primary.main} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://thiruppugazhanbargal.org" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://thiruppugazhanbargal.org`} />
    </Head>
  );
}
