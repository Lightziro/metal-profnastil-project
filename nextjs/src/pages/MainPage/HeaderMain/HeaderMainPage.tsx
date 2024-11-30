import React from 'react';
import styles from './HeaderMainPage.module.scss';
import cn from 'classnames'

export default function HeaderMainPage() {

    return (
        <>
            <div className={styles.headerBackTop}>
                <div className='container'>
                    <h1 className={styles.mainTitle}>
                        Кировский завод металлопрофиля
                    </h1>
                </div>
            </div>
            <div className={styles.headerCenter}>
                <div className='container'>
                    <div className={styles.companyTitle}>
                        ООО ПКП "Автосвет"
                    </div>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <div className='container'>
                    <div className={styles.subTitle}>
                        Компания работает на рынке более 20 лет, занимает прочные позиции в сегменте производства и
                        поставок
                        кровельных материалов в Кирове и за пределами области. Мы зарекомендовали себя как надежный
                        партнер,
                        предоставляющий качественные товары в короткие сроки.
                    </div>
                    <div className={styles.btnPhone}>
                        <a
                            href="tel:+78332535588"
                            className={cn('btn-primary white w-200px')}>Позвонить</a>
                    </div>
                </div>
            </div>
        </>
    );
}
