import React from 'react';

import {
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    IonRow,
    IonCol
} from '@ionic/react';

import { arrowDropright } from 'ionicons/icons'

import BasePage from './BasePage';

type HomeProps = {
    history: any
}

const Home: React.FC<HomeProps> = ({ history }: HomeProps) => (
    <BasePage title="Turni Acquisto Prodotti" content={
        <IonList>
            {[
                { item: 'Scottex', current: 'Francesca C.'},
                { item: 'Detersivo Lavastoviglie', current: 'Fra e Chiara'},
                { item: 'Detersivo Piatti', current: 'Alessandro'},
                { item: 'Buste', current: 'Giuseppe'},
                ].map(({ item, current}, index) => (
                <IonItem onClick={() => history.push(`/details/${index}`)} key={index}>
                    <IonLabel>
                        <IonRow className="ion-align-items-center ion-justify-content-between">
                            <IonCol size="10">
                                <IonText color="primary">
                                    <h1>{item}</h1>
                                </IonText>
                                <IonText>
                                    <p>{current}</p>
                                </IonText>
                            </IonCol>
                            <IonCol size="auto">
                                <IonIcon size="large" icon={arrowDropright}/>
                            </IonCol>
                        </IonRow>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
    } />
);

export default Home;
