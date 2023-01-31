import React from 'react';
import { useTranslation } from 'react-i18next';
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => {
    const { t } = useTranslation();

    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} max-w-[600px]`}>{`${t('cardDeal_h2')}`}</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{`${t('cardDeal_p')}`}</p>
                <Button styles="mt-10" />
            </div>

            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%]" />
                <div className="absolute z-[3] top-[-20px] w-[70%] h-[70%] rounded-full blue__gradient" />
            </div>
        </section>
    );
};

export default CardDeal;
