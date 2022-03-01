import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Container } from "../components/reusable/container";
import { Footer } from "../components/reusable/footer";
import { HeadingTitle } from "../components/reusable/heading-title";

const Video = styled.div`
  background-color:#efefef;
  text-align:center;
  padding-top: 10px;
`

const VideoContainer = styled(Container)`
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items: center;
`

const VideoIframe = styled.div`
${({ theme }) => css`

  /* width: fit-content;
  height: fit-content; */
  border: 5px solid ${theme.colors.accent};
  border-radius: 22px;
  padding:0;
  display:flex;
  
  @media(min-width: ${theme.medias.lg}) {
    //width: 90vw;
  }
  
  iframe{
    border: none;
    border-radius: 22px;
    margin:0;
    line-height:1;
    height: 100%;
    width: 100%;
  }
  `}
`

const IconList = styled.ul`
  font-family: 'Montserrat', sans serif;
`;

const IconListItem = styled.li`
  color: #333;
  img{
    filter: invert(59%) sepia(45%) saturate(5552%) hue-rotate(195deg) brightness(102%) contrast(98%);
  }
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  font-weight: 600;
  font-size: 17px;
`

const Button = styled.a`
  font-family: 'Montserrat', sans serif;
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  fill: #000;
  color: #000;
  background-color: #4294fc;
  border:0;
  border-style: solid;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 0 10px 2px rgb(38 38 38 / 55%);
  padding: 15px 60px 15px 60px;
  transition: all .3s;

  :hover{
    color: ${props => props.theme.colors.accent};
    background-color: #333;
    transform: scale(1.1);
  }
`

const Price = styled.div`
  ${HeadingTitle}:nth-child(2){
    padding:0 0 0 80px;
  }
  ${HeadingTitle}{
    font-size:22px;
    span{
      font-size:28px;
    }
  }
`

const ForWho = styled.div`
  background-color: ${props => props.theme.colors.text};
  padding:70px 0 70px 0;
  text-align: center;

  ${HeadingTitle}{
    color: #4294fc;
    font-family: "Poppins",Sans-serif;
    font-size: 40px;
    margin: 0 0 20px 0;
  }

  ${IconListItem}{
    color: ${props => props.theme.colors.accent};
    font-size: 17px;
    font-weight: 500;
    line-height: 1.7em;
  }
`

const NotIs = styled.div`
  padding:70px 0 70px 0;
  text-align: center;

  ${HeadingTitle}{
    color: ${props => props.theme.colors.text};
    font-family: "Poppins",Sans-serif;
    font-size: 40px;
    margin: 0 0 20px 0;
    span{
      color:#FC4242;
    }
  }

  ${IconListItem}{
    font-size: 17px;
    font-weight: 500;
    line-height: 3.7em;
    img{
      //width: 10px;
      filter: invert(31%) sepia(41%) saturate(2020%) hue-rotate(330deg) brightness(120%) contrast(98%);
    }
  }
`

const notIsContent = [
  'Leitura dinâmica (até porque não funciona)', 'Um monte de aulas intermináveis e sem sentido algum', 'Aulas que só ficam na teoria e não têm resultado prático', 'Fórmula mágica para quem tem preguiça de estudar'
]

const forWhoContent = [
  'Quer encontrar um método confiável e que funciona', 'Não consegue explicar o que leu porque não lembra', 'Não consegue manter a atenção pois chega cansado do trabalho', 'Abre o livro para ler e começa a pensar na morte da bezerra',
  'Não entende o que lê e se sente burro', 'Não tem organização e disciplina para ler todos os dias', 'Vive comprando livros mas não termina nenhum deles', 'Lê devagar a ponto de perder o interesse no livro',
  'Não vê qualquer mudança ou resultado prático depois da leitura'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Leitor em 30 dias - Elton Luiz</title>
        <link rel="canonical" href="https://eltonfilho.com/leitorem30dias/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Leitor em 30 dias - Elton Luiz" />
        <meta property="og:description" content="CRIE O HÁBITO DA LEITURA E ENTENDA O QUE VOCÊ LÊ EM 30 DIAS CRIE O HÁBITO DA LEITURA E ENTENDA O QUE VOCÊ LÊ EM 30 DIAS Assista ao vídeo abaixo para entender como funciona o método. https://youtu.be/1AlscF21e2k Comprovado por + 1500 alunos Fazer minha inscrição agora! 12x de R$48,42 ou R$497 à vista […]"></meta>
        <meta property="og:url" content="https://eltonfilho.com/leitorem30dias/"></meta>
        <meta property="og:site_name" content="Elton Luiz"></meta>
        {/* <meta property="article:modified_time" content={(new Date()).toString()}></meta> */}
        <meta property="og:image" content="https://eltonfilho.com/wp-content/uploads/elementor/thumbs/LOGO-LEITOREM30DIAS-ph116vdnev3lfd3u58cjzjcjofzwypfhcupgd2uqg2.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:label1" content="Est. tempo de leitura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Head>
      <Video>
        <VideoContainer>
          <HeadingTitle uppercase>
            CRIE O HÁBITO DA LEITURA E ENTENDA O QUE VOCÊ LÊ EM 30 DIAS
          </HeadingTitle>
          <p>
            Assista ao vídeo abaixo para entender como funciona o método.
          </p>

          {/* <VideoIframe>
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="790" height="444" src="https://www.youtube.com/embed/1AlscF21e2k?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Feltonfilho.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-30274954_16="true"></iframe>
          </VideoIframe> */}

          <IconList>
            <IconListItem>
              <Image src='/icons/square-check-solid.svg' height={30} width={30}  />
              Comprovado por + 1500 alunos
            </IconListItem>
          </IconList>

          <Button href="https://pay.hotmart.com/W62018823K?checkoutMode=10&bid=1639333102768" target="_blank">
            Fazer minha inscrição agora!
          </Button>

          <Price>
            <HeadingTitle>
              12x de <span>R$48,42</span>
            </HeadingTitle>
            <HeadingTitle>
              ou R$497 à vista
            </HeadingTitle>
          </Price>


          <Image width="272" height={52} src="https://eltonfilho.com/wp-content/uploads/2021/03/formas-de-pagamento.png.webp" />
        </VideoContainer>
      </Video>

      <ForWho>
        <Container>
          <HeadingTitle>
            O CURSO É PARA QUEM:
          </HeadingTitle>
          <IconList>
            {forWhoContent.map((item, index) => (
              <IconListItem key={index}>
                <Image src={'/icons/check-solid.svg'} height={20} width={20} />
                {item};
              </IconListItem>
            ))}
          </IconList>
        </Container>
      </ForWho>

      <NotIs>
        <Container>
          <HeadingTitle>
            ESTE CURSO <span>NÃO É</span>:
          </HeadingTitle>
          <IconList>
            {notIsContent.map((item, index) => (
              <IconListItem key={index}>
                <Image src='/icons/exclamation-solid.svg' height={20} width={30} />
                {item};
              </IconListItem>
            ))}
          </IconList>

        </Container>
      </NotIs>
      <Footer />
    </>
  )
}
