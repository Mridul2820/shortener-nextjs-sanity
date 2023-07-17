import { useRouter } from "next/router";
import { useEffect } from "react";
import SanityClient from "../src/client/sanity";

const AliasView = ({ error }) => {
  const router = useRouter();
  useEffect(() => {
    if (error) {
      router.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return null;
};

export async function getServerSideProps({ params }) {
  const alias = params.alias;

  const url = await SanityClient.fetch(
    `*[_type == "redirect" && src == "${alias}"][0]{
      src,
      destination,
    }`
  );

  if (url && url?.src && url?.destination) {
    return {
      redirect: {
        destination: url.destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      error: "error",
    },
  };
}

export default AliasView;
