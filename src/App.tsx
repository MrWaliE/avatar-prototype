import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Studio from './pages/Studio';
import StudioApp from './pages/StudioApp';
import SubPage from './pages/SubPage';
import VideoAvatar from './pages/VideoAvatar';
import PhotoAvatar from './pages/PhotoAvatar';
import AvatarIV from './pages/AvatarIV';
import VideoTranslator from './pages/VideoTranslator';
import VideoAgent from './pages/VideoAgent';
import AIAvatarGenerator from './pages/AIAvatarGenerator';
import AIDubbing from './pages/AIDubbing';
import TextToVideo from './pages/TextToVideo';
import ImageToVideo from './pages/ImageToVideo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/app/*" element={<StudioApp />} />
        <Route path="/platform/video-avatar" element={<VideoAvatar />} />
        <Route path="/platform/photo-avatar" element={<PhotoAvatar />} />
        <Route path="/platform/avatar-iv" element={<AvatarIV />} />
        <Route path="/platform/video-translator" element={<VideoTranslator />} />
        <Route path="/platform/video-agent" element={<VideoAgent />} />
        <Route path="/platform/ai-avatar-generator" element={<AIAvatarGenerator />} />
        <Route path="/platform/ai-dubbing" element={<AIDubbing />} />
        <Route path="/platform/text-to-video" element={<TextToVideo />} />
        <Route path="/platform/image-to-video" element={<ImageToVideo />} />
        <Route path="/platform/*" element={<SubPage />} />
        <Route path="/features/*" element={<SubPage />} />
        <Route path="/use-cases/*" element={<SubPage />} />
        <Route path="/learning/*" element={<SubPage />} />
        <Route path="/company/*" element={<SubPage />} />
        <Route path="/pricing" element={<SubPage />} />
        <Route path="/business" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}
