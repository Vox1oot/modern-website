import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';

const Stats = () => {
    const { t } = useTranslation();
    const stats = t('stats', { returnObjects: true });

    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb20 mb-6`}>
            {stats.map(({ id, title, value }) => (
                <div key={id} className="flex-1 flex justify-start items-center flex-row m-3">
                    <h4 className="font-poppins font-semibold max-xs:text-[40px] max-xs:leading-[53px] text-[50px] leading-[43px] text-white ">{value}</h4>
                    <p className="font-poppins font-normal max-xs:text-[25px] max-xs:leading-[26px] text-[20px] leading-[21px] text-gradient uppercase ml-3">{title}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
