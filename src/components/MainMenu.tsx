import {
    IonContent, IonHeader, IonItem, IonList, IonMenu,
    IonTitle, IonToolbar,
} from '@ionic/react';
import React from 'react';

const MainMenu: React.FC = () => {

    return  <IonMenu contentId="main" side="start">
        <IonHeader>
            <IonToolbar color="light">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem routerLink="/home">Home</IonItem>
                <IonItem routerLink="/views">Viste</IonItem>
                <IonItem routerLink="/login">Esci</IonItem>
            </IonList>
        </IonContent>
    </IonMenu>
};

export default MainMenu;