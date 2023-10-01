import { BrowserRouter ,Routes , Route  } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Feed from "./pages/Feed"
import VideoDetail from "./pages/VedioDetail"
import ChannelDetail from "./pages/ChannelDetail"
import SearchFeed from "./pages/SearchFeed"
function App() {
  return (
    <>
      <BrowserRouter>
          <Box sx={{backgroundColor : '#000'}}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Feed />}  />
              <Route path="/video/:id" element={<VideoDetail />}  />
              <Route path="/channel/:id" element={<ChannelDetail />}  />
              <Route path="/search/:searchTerm" element={<SearchFeed />}  />
            </Routes>
          </Box>
      </BrowserRouter>
    </>
  )
}

export default App
