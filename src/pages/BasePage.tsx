import React from 'react';

import {
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonBackButton
} from '@ionic/react';

type BasePageProps = {
    title: string,
    content: object
}

const BasePage: React.FC<BasePageProps> = ({ title, content }: BasePageProps) => (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonRow className="ion-align-items-center ion-justify-content-start">
                    <IonCol size="auto">
                        <IonBackButton />
                    </IonCol>
                    <IonCol>
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
