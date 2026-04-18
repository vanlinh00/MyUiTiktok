    import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('content')}>
            <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video controls src={data.file_url} loop />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;