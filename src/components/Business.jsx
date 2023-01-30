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
    icon, title, content, index, len,
}) => (
    <div className={`flex flex-col xs:flex-row p-6 rounded-[20px] 
        ${index !== (len - 1) ? 'mb-6' : 'mb-0'} feature-card items-center`}
    >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-5 xs:mb-0`}>
            <img
                src={mapping[icon]}
                alt={icon}
                className="w-[50%] h-[50%] object-contain"
            />
        </div>

        <div className="flex-1 flex flex-col ml-3 cursor-pointer">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
            <p className={`${styles.paragraph}`}>{content}</p>
        </div>

    </div>
);

const Business = () => {
    const { t } = useTranslation();
    const features = t('features', { returnObjects: true });
    const len = features.lenght;

    return (
        <section id="features" className={layout.section}>
            <div className={`${layout.sectionInfo} max-w-[600px]`}>
                <h2 className={styles.heading2}>{`${t('features_h2')}`}</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{`${t('features_p')}`}</p>
                <Button styles="mt-10" />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map(({
                    id, icon, title, content,
                }, index) => (
                    <FeatureCard
                        key={id}
                        icon={icon}
                        title={title}
                        content={content}
                        index={index}
                        len={len}
                    />
                ))}
            </div>
        </section>
    );
};

export default Business;
