import {
    IonCol,
    IonRow,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonItem,
    IonLabel,
    IonText,
    IonInput,
    IonItemGroup,
    IonSearchbar
} from '@ionic/react';
import React from 'react';

interface CalendarCreationProps {
    dismissModal: () => void;
}

const CalendarCreation: React.FC<CalendarCreationProps> = (props) => {
    return (
        <IonRow>
            <IonCol>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol className="ion-text-center">
                        <IonTitle>Nuovo Calendario</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol>
                        <IonItemGroup>
                            <IonItem>
                                <IonLabel position="floating">Nome del calendario
                                    <IonText color="danger">*</IonText>
                                </IonLabel>
                                <IonInput required/>
                            </IonItem>
                            <IonItem>
                                <IonSearchbar
                                    placeholder="Aggiungi persone..."
                                    showCancelButton="focus"/>
                            </IonItem>
                        </IonItemGroup>
                        <IonToolbar>
                            <IonButtons slot="end">
                                <IonButton fill="clear" onClick={props.dismissModal}>Aggiungi</IonButton>
                                <IonButton fill="clear" onClick={props.dismissModal}>Annulla</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonCol>
                </IonRow>
            </IonCol>
        </IonRow>
    )
};

export default CalendarCreation;

