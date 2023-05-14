import { useEffect } from "react";
import { useRouter } from "next/router";
import { BuscarSessao } from "../Service/AuthenticationService";
import { ParsedUrlQuery } from "querystring";
import { get, save} from "../Service/CookieService";

type IndexProps = {
  mesa: string;
  token: string;
};

export default function Index({ mesa, token }: IndexProps) {
  const router = useRouter();

  useEffect(() => {
    save('cli_cliente', mesa)
    BuscarSessao(token)
      .then(() =>{
        if(get('webToken')) {
          router.push('/menu')
          return
        }
        throw Error('token invalido')
        
      })
      .catch(() => router.push('/semToken'))
  }, []);

  return <div>Aguardando verificação...</div>;
}

export async function getServerSideProps({ query }: { query: ParsedUrlQuery }): Promise<{ props: IndexProps }> {
  const mesa = query.mesa as string;
  const token = query.token as string;

  return {
    props: {
      mesa,
      token,
    },
  };
}
