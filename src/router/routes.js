import About from '../pages/About';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import Home from '../pages/Home';
import Category from '../pages/Category';

export const PublicRoutes = [
  { path: '/', element: <Home />, exact: true },
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:slug', element: <PostPage />, exact: true },
  { path: '/category/:category', element: <Category />, exact: true },
  { path: '/error', element: <Error />, exact: true },
];
