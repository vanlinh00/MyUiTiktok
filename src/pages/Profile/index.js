import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '../../components/Button';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function UserInfo() {
  useParams();
  
  return (
    <div className={cx('wrapper')}>
      <h1>User Information Page</h1>
      <p>Welcome to your profile settings!</p>
      <Button>Edit Profile</Button>
    </div>
  );
}

export default UserInfo;