import Loadable from 'react-loadable';
import Loading from '../Loading';
 
const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});
const Classify = Loadable({
  loader: () => import('./classify'),
  loading: Loading,
});
const Mine = Loadable({
  loader: () => import('./mine'),
  loading: Loading,
});
const Shaop = Loadable({
  loader: () => import('./shaop'),
  loading: Loading,
});
const Loagin = Loadable({
  loader: () => import('./Loagin'),
  loading: Loading,
});
const Ej = Loadable({
  loader: () => import('./erji'),
  loading: Loading,
});

export{
  Home,
  Classify,
  Mine,
  Shaop,
  Loagin,
  Ej
}
 
