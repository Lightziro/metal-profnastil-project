import styles from './OfficeInfo.module.scss';
import cn from 'classnames'
import {featuresList, phoneList} from "./constants";

const OfficeInfo = () => {
    return (
        <div className='container plr-30'>
            <h2 className={styles.mainTitle}>Наш офис</h2>
            <div className={cn('flex gap30', styles.contactBlock)}>
                <div className={cn('w100', styles.pictureBlock)}>
                    <img className={styles.pictureOffice} src='/images/office.png'/>
                </div>
                <div className='w100 direction gap10'>
                    <div className={styles.titleItem}>Наши адреса:</div>
                    <div>
                        Отдел продаж: г.Киров, ул. Лепсе, д. 24, офис 102, этаж 1
                    </div>
                    <div>
                        Производство: г.Киров, проезд Больничный, здание 7Б
                    </div>
                    <div className={styles.titleItem}>Контакты для связи:</div>
                    <div className='flex gap10 wrap'>
                        {phoneList.map((phone, index) => (<span key={phone} className={styles.tag}>{phone}</span>))}
                    </div>
                    <div className={styles.titleItem}>Приемущества:</div>
                    <div className='direction gap10'>
                        {featuresList.map((name, index) => (<span>{index+1}. {name}</span>))}
                    </div>
                    <div className={styles.titleItem}>Способ оплаты:</div>
                    <div className='flex gap10 wrap'>
                        <span className={styles.tag}>
                            Наличными
                        </span>
                        <span className={styles.tag}>
                            Безналичный расчет
                        </span>
                        <span className={styles.tag}>
                            Оплата картой
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfficeInfo
