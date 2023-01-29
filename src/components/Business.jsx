import React from 'react';
import { useTranslation } from 'react-i18next';
import styles, { layout } from '../styles';
import Button from './Button';
import { shield, send, star } from '../assets';

const mapping = {
    shield,
    send,
    star,
};

const FeatureCard = ({
    icon, title, content, index,
}) => (
    <div>
        <div>
            <img src={mapping[icon]} alt={icon} />
        </div>
    </div>
);

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

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map(({ id, ...rest }, index) => (
                    <FeatureCard key={id} {...rest} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Business;
