import React from 'react';

import {
    IonFab, IonFabButton,
    IonIcon,
    IonList,
    IonItem
} from '@ionic/react';

import { add } from 'ionicons/icons';

import BasePage from './BasePage';

import { ProductShift } from '../components';

type HomeProps = {
    history: any
}

const Home: React.FC<HomeProps> = ({ history }: HomeProps) => (
    <BasePage title="Turni Acquisto Prodotti" content={
        <>
            <IonList>
                {[{ item: 'Scottex', current: 'Francesca C.'}].map(({item, current}, index) => (
                    <IonItem onClick={() => history.push(`/details/${index}`)}>
                        <ProductShift item={item} current={current}/>
                    </IonItem>
                ))}
            </IonList>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton size="small" color="primary">
                    <IonIcon icon={add}/>
                </IonFabButton>
            </IonFab>
        </>
    } />
);

export default Home;
