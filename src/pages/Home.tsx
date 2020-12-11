import React from 'react';

import {
    IonList,
    IonItem
} from '@ionic/react';

import BasePage from './BasePage';

import { ProductShift } from '../components';

type HomeProps = {
    history: any
}

const Home: React.FC<HomeProps> = ({ history }: HomeProps) => (
    <BasePage title="Turni Acquisto Prodotti" content={
        <IonList>
            {[{ item: 'Scottex', current: 'Francesca C.'}].map(({item, current}, index) => (
                <IonItem onClick={() => history.push(`/details/${index}`)} key={index}>
                    <ProductShift item={item} current={current}/>
                </IonItem>
            ))}
        </IonList>
    } />
);

export default Home;
