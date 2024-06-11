import {workTime} from "./constants";
import styles from './WorkTime.module.scss';
import cn from 'classnames'

const WorkTime = () => {
    return (
        <div className='container plr-30'>
            <h1 className={styles.title}>Режим работы офиса</h1>
            <div className={styles.workList}>
                {workTime.map(item => (<div className={cn(styles.workBlock, {[styles.disabled]: item?.disabled})}>
                    <div className={styles.day}>{item.day}</div>
                    <span className={styles.subTitle}>{item.time}</span>
                </div>))}
            </div>
        </div>)
}
export default WorkTime
