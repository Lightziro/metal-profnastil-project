import React from 'react';
import FormQuestion from '../form-question/FormQuestion';
import styles from './Footer.module.scss';
import cn from 'classnames'

export default function Footer() {
    return (
        <div className={cn('container flex gap30 plr-30 mt-20', styles.footer)}>
            <div className='w100'>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d6dc4c17100f76230bb82acc3ea18700543de84f6c676e69560ecbd44113b10&amp;source=constructor"
                    width="100%" height="400" frameBorder="0"></iframe>
            </div>
            <div className='w100'>
                <FormQuestion/>
            </div>
        </div>
    );
}
