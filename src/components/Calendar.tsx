import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle, IonChip,
    IonCol, IonLabel,
    IonRow, IonText,
} from '@ionic/react';
import React from 'react';

import data from '../data.json';

interface CalendarProps {
    selectedDate: string | null | undefined;
    calendarId: number;
}

const Calendar: React.FC<CalendarProps> = (props) => {
    //TODO: rimuovere questa porzione di codice, dati hardcoded
    const shiftsForCalendar = [ //l'indice dell'array corrisponde all'indice del calendario
        [0, 1], //il numero dentro l'array corrisponde all'indice (id) del turno
        [2],
        []
    ];

    let routerLink = '/details/' + props.calendarId;
    let shiftIndices = shiftsForCalendar[props.calendarId];

    let shifts = [];

    for(let i = 0; i < shiftIndices.length; i++) {
        let shiftDescription = null;
        if (data.shift[shiftIndices[i]].description) {
            shiftDescription = <IonCol className="ion-text-center">
                <IonText>{data.shift[shiftIndices[i]].description}</IonText>
            </IonCol>;
        }

        shifts.push(<IonRow className="ion-justify-content-center ion-align-items-center" key={i}>
            {shiftDescription}
            <IonCol className="ion-text-center">
                <IonChip color={data.shift[shiftIndices[i]].badgeColor}>
                    <IonLabel>{data.person[data.shift[shiftIndices[i]].badgeText]}</IonLabel>
                </IonChip>
            </IonCol>
        </IonRow>)
    }
    return  <IonCard color="light" routerLink={routerLink}>
        <IonCardHeader>
            <IonCardTitle>{data.calendar[props.calendarId].name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            {shifts}
        </IonCardContent>
    </IonCard>
};

export default Calendar;

