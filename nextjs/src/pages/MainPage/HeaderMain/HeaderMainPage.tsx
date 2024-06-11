import React from 'react';
import styles from './HeaderMainPage.module.scss';

export default function HeaderMainPage() {

    return (
        <div className={styles.mastHead}>
            <div className='container'>
                <h1 className={styles.mainTitle}>
                    Кировский завод металлопрофиля
                </h1>
                <div className={styles.subTitle}>
                    Компания занимается производством профнастила с 2003 года по текущий год и
                    имеет
                    огромную
                    базу клиентов. Мы производим продукцию с полимерным покрытием, которая соответствует
                    международной системе RAL
                </div>
            </div>
        </div>
    );
}
