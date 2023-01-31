import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import {
    airbnb, binance, coinbase, dropbox,
} from '../assets';

const mapping = {
    airbnb,
    binance,
    coinbase,
    dropbox,
};

const Clients = () => {
    const { t } = useTranslation();
    const clients = t('clients', { returnObjects: true });

    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map(({ id, logo }) => (
                    <div key={id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] p-2 cursor-pointer`}>
                        <img src={`${mapping[logo]}`} alt={logo} className="sm:w-[192px] w-[100px] object-contain hover:invert" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
