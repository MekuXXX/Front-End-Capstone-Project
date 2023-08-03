/* eslint-disable no-empty-pattern */
import './Footer.scss';
type Props = {};
export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();
  return (
    <footer data-testid='footer'>
      @Copyright{currentYear} maded by <span>Mohamed</span>{' '}
    </footer>
  );
}
