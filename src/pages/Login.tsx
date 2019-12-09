import React from 'react';
import {
    IonCol,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonRow,
    IonInput, IonItemGroup, IonItem, IonButton, IonCheckbox, IonImg, IonTitle, IonItemDivider
} from "@ionic/react";

const Login: React.FC = () => {
    const shapes = {
        src: './assets/shapes.svg'
    };
    return (
        <IonPage>
            <IonHeader>
                <IonImg src={shapes.src}/>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-start">
                        <IonTitle>Accedi</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-center">
                        <IonItemDivider/>
                        <IonItemGroup>
                            <IonItem>
                                <IonLabel position="stacked">Username</IonLabel>
                                <IonInput required/>
                            </IonItem>
                            <IonItem  no-lines>
                                <IonLabel position="stacked">Password</IonLabel>
                                <IonInput required type="password"/>
                            </IonItem>
                        </IonItemGroup>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-center">
                        <IonButton color="purplenavy" expand="full" fill="solid">Login</IonButton>
                        <IonButton color="purplenavy" fill="clear" href="/register">Registrati</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-center">
                        <IonItem no-lines>
                            <IonLabel>Ricordami</IonLabel>
                            <IonCheckbox name="remember" slot="start" color="purplenavy"/>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;