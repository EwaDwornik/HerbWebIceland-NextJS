import styles from '/components/test.module.scss'
import classnames from 'classnames';

const Loading = <div
    style={{
        margin: `50px 50px 70px 50px`,
        display: 'flex',
        flexDirection: 'column',
    }}
>
    <div className={styles?.[`mosaic-loader`]}>
        {[...new Array(32)].map((e, i) => {
            return [...new Array(32)].map((e, j) => {
                return (
                    <div
                        className={classnames(
                            styles.cell,
                            styles?.[`d-${Math.round(i / 32 + j * 32)}`]
                        )}
                    ></div>
                );
            });
        })}
    </div>
</div>

export default Loading