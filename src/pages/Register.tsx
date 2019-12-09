import React from 'react';
import {
    IonCol,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonRow,
    IonInput,
    IonItemGroup,
    IonItem,
    IonButton,
    IonImg,
    IonTitle,
    IonItemDivider
} from "@ionic/react";

const Register: React.FC = () => {
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
                        <IonTitle>Crea un account</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-center">
                        <IonItemDivider/>
                        <IonItemGroup>
                            <IonItem>
                                <IonLabel position="stacked">Email</IonLabel>
                                <IonInput required type="email"/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Username</IonLabel>
                                <IonInput required/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Password</IonLabel>
                                <IonInput required type="password"/>
                            </IonItem>
                        </IonItemGroup>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-center">
                    <IonCol className="ion-text-center">
                        <IonButton color="primary" expand="full" fill="solid">Registrati</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Register;