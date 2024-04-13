import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import PostingDetail from './pages/PostingDetail';
import Write from './pages/Write';
import Header from "./components/common/Header";


function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path='/' element={<Main/>}/> {/* 메인페이지 */}
              <Route path='/write' element={<Write/>}/> {/* 새글 작성페이지 */}
              <Route path='/post/:postId' element={<PostingDetail/>}/> {/* 메인페이지 */}
          </Routes>
      </>
  );
}

export default App;
