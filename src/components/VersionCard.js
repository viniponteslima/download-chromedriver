import { Link } from 'react-router-dom';
import styles from './VersionCard.module.css';

export default function VersionCard({ text, link, sameVersion }) {
  return (
    <Link to={link} className={`${styles.versionCard} ${sameVersion && styles.yourVersion}`}>
      <small>{sameVersion ? 'Your version' : 'Version'}:</small>
      <h3>{text}</h3>
    </Link>
  );
}
