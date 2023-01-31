import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import FeedBackCard from './FeedBackCard';

const Testimonials = () => {
    const { t } = useTranslation();
    const feedbacks = t('feedbacks', { returnObjects: true });

    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[80%] h-[80%] -right-[90%] rounded-full blue__gradient" />

            <div className="w-full flex hustify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z[1]">
                <h2 className={`${styles.heading2} max-w-[580px]`}>{`${t('feedback_h2')}`}</h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>{`${t('feedback_p')}`}</p>
                </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] cursor-pointer">
                {feedbacks.map(({
                    id, content, name, title, img,
                }) => (
                    <FeedBackCard
                        key={id}
                        content={content}
                        name={name}
                        title={title}
                        img={img}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
