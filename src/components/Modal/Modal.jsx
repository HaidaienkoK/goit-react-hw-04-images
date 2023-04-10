import { useEffect} from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal({
  onClose,
  currentImageUrl,
  currentImageDescription,
}) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
     onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleClickBackdrop}>
      <div className={css.modal}>
        <img src={currentImageUrl} alt={currentImageDescription} />
      </div>
    </div>
  );
}

Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
  };
