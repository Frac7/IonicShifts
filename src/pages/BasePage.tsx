import React from 'react';

import {
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';

type BasePageProps = {
    title: string,
    content: object
}

const BasePage: React.FC<BasePageProps> = ({ title, content }: BasePageProps) => (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonRow className="ion-align-items-center ion-justify-content-around">
                    <IonCol className="ion-text-center">
                        <IonTitle>{title}</IonTitle>
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            {content}
        </IonContent>
    </IonPage>
);

export default BasePage;
