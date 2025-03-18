import { VscAccount, VscArchive, VscHome, VscSettingsGear } from 'rocketicons/vsc'
import './App.css'
import Aurora from './components/Aurora'
import Dock from './components/Dock'
import PixelTransition from './components/pixelTransitionCard'

import styled  from 'styled-components'
import { RcRocketIcon } from 'rocketicons/rc'

import logo from './assets/logo.png'
import StatusButton from './components/statusButton'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderSite = styled.header`
  padding: 1rem;
  background: #1C1C1C;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0 2rem;
  `
const PerfilComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TextTituloSubtitulo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const Titulo = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin: 0;
`
const Subtitulo = styled.span`
  color: #999;
  font-size: 1rem;
`

const Banner = styled.div`
  max-width: 1000px;
  max-height: 600px;
  background: #333;
  border-radius: 2rem;
  border: 1px solid #000080;
  margin-top: 2rem;
`

const items = [
  { icon: <RcRocketIcon  className="icon-indigo-400" />, label: 'Instagram', onClick: () => alert('Home!') },
  { icon: <VscArchive size={18} />, label: 'Linkedin', onClick: () => alert('Archive!') },
  { icon: <VscAccount size={18} />, label: 'Youtube', onClick: () => alert('Profile!') },
  { icon: <VscSettingsGear size={18} />, label: 'Behance', onClick: () => alert('Settings!') },
];


function App() {

  return (
    <>
      <Wrapper>
          <Aurora
            colorStops={["#3A29FF", "#000080", "#00BFFF"]}
            blend={0.5}
            amplitude={2.0}
            speed={0.5}
          />
          <HeaderSite>
            <PerfilComponent>
              <PixelTransition
                firstContent={
                  <img
                    src={logo}
                    alt="default pixel transition content, a cat!"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111"
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <TextTituloSubtitulo>
                  <Titulo>WebROCKET</Titulo>
                  <Subtitulo>Agência especializada em marketing</Subtitulo>
              </TextTituloSubtitulo>
            </PerfilComponent>
            <StatusButton />
          </HeaderSite>
          <Banner>
            <h1>banner</h1>
          </Banner>

          <Dock 
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
      </Wrapper>
    </>
  )
}

export default App
