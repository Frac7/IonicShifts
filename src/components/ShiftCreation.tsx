import {
    IonCol,
    IonRow,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonButton,
    IonButtons,
    IonItem,
    IonLabel,
    IonText,
    IonInput,
    IonItemGroup,
    IonSearchbar, IonItemDivider,
} from '@ionic/react';
import React from 'react';

interface CalendarCreationProps {
    dismissModal: () => void;
}

const ShiftCreation: React.FC<CalendarCreationProps> = (props) => {
    return (
        <IonRow>
            <IonCol>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol className="ion-text-center">
                        <IonTitle>Nuovo Turno</IonTitle>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItemGroup>
                            <IonItem>
                                <IonSearchbar
                                    placeholder="Aggiungi persone...*"
                                    showCancelButton="focus"/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Descrizione</IonLabel>
                                <IonInput required/>
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

export default ShiftCreation;

