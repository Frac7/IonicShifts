import React, { useState } from 'react';

import {
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonProgressBar
} from '@ionic/react';

import { ErrorToast } from '../components';

type BasePageProps = {
    title: string,
    Content: React.ElementType
}

const BasePage: React.FC<BasePageProps> = ({ title, Content }: BasePageProps) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    return (
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
                {isLoading && <IonProgressBar type="indeterminate" color="primary"/>}
                <Content isLoading={isLoading} setIsLoading={setIsLoading} setIsError={setIsError} />
                {isError && <ErrorToast setIsError={setIsError} setIsLoading={setIsLoading} />}
            </IonContent>
        </IonPage>
    );
}

export default BasePage;
