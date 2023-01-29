import React from 'react';
import { useTranslation } from 'react-i18next';
import styles, { layout } from '../styles';
import Button from './Button';

const Business = () => {
    const { t } = useTranslation();
    const features = t('features', { returnObjects: true });

    return (
        <section id="features" className={layout.section}>
            <div className={`${layout.sectionInfo} max-w-[600px]`}>
                <h2 className={styles.heading2}>{`${t('features_h2')}`}</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{`${t('features_p')}`}</p>
                <Button styles="mt-10" />
            </div>
        </section>
    );
};

export default Business;
