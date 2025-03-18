import { VscAccount, VscArchive, VscHome, VscSettingsGear } from 'rocketicons/vsc'
import './App.css'
import Aurora from './components/Aurora'
import Dock from './components/Dock'
import PixelTransition from './components/pixelTransitionCard'

import styled  from 'styled-components'
import { RcRocketIcon } from 'rocketicons/rc'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderSite = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: #1C1C1C;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`
const PerfilComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TextTituloSubtitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
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
          </HeaderSite>
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
