import React from 'react';
import {
    IonCol,
    IonContent,
    IonFab, IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { add } from "ionicons/icons";

interface DetailsProps {
    calendarName: string; //questo in realtà andrebbe meglio come calendar id
    date: string | null | undefined;
}

class Details extends React.Component<DetailsProps, any> {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonRow className="ion-align-items-center ion-justify-content-around">
                            <IonCol className="ion-text-center">
                                <IonTitle>Calendario Turni</IonTitle>
                            </IonCol>
                        </IonRow>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRow className="ion-align-items-center ion-justify-content-center">
                        <IonCol className="ion-text-center">
                        </IonCol>
                    </IonRow>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton size="small" color="dark">
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

export default Details;