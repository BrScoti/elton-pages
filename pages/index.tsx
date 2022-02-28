import styled from "styled-components";
import { Container } from "../components/reusable/container";
import { Footer } from "../components/reusable/footer";
import { HeadingTitle } from "../components/reusable/heading-title";

const Video = styled.div`
  background-color:#efefef;
  text-align:center;
  
`

const VideoContainer = styled(Container)`
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items: center;
`

const VideoIframe = styled.div`
  width: fit-content;
  height: fit-content;
  border: 5px solid ${props=> props.theme.colors.accent};
  border-radius: 22px;
  padding:0;

  iframe{
    border: none;
    border-radius: 22px;
    margin:0;
    line-height:1;
  }
`

const IconList= styled.ul`
`;

const IconListItem=  styled.li`
`

export default function Home() {
  return (
    <div>
      <Video>
        <VideoContainer>
          <HeadingTitle uppercase>
            CRIE O HÁBITO DA LEITURA E ENTENDA O QUE VOCÊ LÊ EM 30 DIAS
          </HeadingTitle>
          <p>
            Assista ao vídeo abaixo para entender como funciona o método.
          </p>

          <VideoIframe>
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="790" height="444" src="https://www.youtube.com/embed/1AlscF21e2k?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Feltonfilho.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-30274954_16="true"></iframe>
          </VideoIframe>
        </VideoContainer>
      </Video>
      <Footer />
    </div>
  )
}
