import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import Button from './Button';

const CTA = () => {
    const { t } = useTranslation();

    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>
                    {`${t('tryOurService')}`}
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {`${t('tryOurService_p')}`}
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
            </div>
        </section>
    );
};
export default CTA;
