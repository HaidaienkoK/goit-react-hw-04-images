import { MdCached } from 'react-icons/md';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <MdCached className={css.loader} />
    </div>
  );
}

export default Loader;
