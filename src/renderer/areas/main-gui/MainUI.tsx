import { NONAME } from 'dns'
import { PackageJsonPage } from '@/renderer/pages-soup/package-json-page'
import { VitePage } from '@/renderer/pages-soup/vite-page'
import { useWindowSize } from '@react-hook/window-size'
import styled from 'styled-components'

import { Sidebar } from './Sidebar'
import { useMainGuiStore } from './main-gui-store'

const defaultSidebardWidth = 150

export const MainUI: React.VFC<{}> = () => {
  const [width, height] = useWindowSize()
  const selectedMenuOption = useMainGuiStore(
    (state) => state.selectedMenuOption
  )

  return (
    <MainUiContainer style={{ height: height - 40 }}>
      <Sidebar sidebarWidth={defaultSidebardWidth} />
      <GuiBody style={{ height: '100%', width: width - defaultSidebardWidth }}>
        <VitePage
          style={{
            display: selectedMenuOption === 'Vite' ? 'initial' : 'none'
          }}
        />
        <PackageJsonPage
          style={{
            display: selectedMenuOption === 'package.json' ? 'initial' : 'none'
          }}
        />
      </GuiBody>
    </MainUiContainer>
  )
}

const MainUiContainer = styled.div`
  display: flex;
  /* height: 30%; */
  /* overflow: hidden; */
  /* height: 100%; */
  /* padding-top: 40px; */
`

const GuiBody = styled.div`
  overflow-y: scroll;
`
