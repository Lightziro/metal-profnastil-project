import React from 'react';
import {clientList} from './constants';
import styles from './ListClient.module.scss';

export default function ClientListMainPage() {
    return (
        <div className='container'>
            <h2 className={styles.textTitle}>Наши клиенты</h2>
            <div className={styles.wrapperList}>
                {clientList.map((object, index) => <img key={index}
                                                        src={`/${object.img}`}
                                                        className={styles.clientPicture}
                                                        title={object.name}
                    />
                )}
            </div>
        </div>
    );
}
