import {
  Routes,
  Route,
} from 'react-router-dom';

import { Feedback } from './Feedback';
import { Home } from './Home';
import { NotFound } from './NotFound';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
