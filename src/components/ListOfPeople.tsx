import React, { useState } from 'react';

import {
    IonBadge,
    IonCol,
    IonItem,
    IonList,
    IonRow, IonSpinner,
    IonText,
    useIonViewWillEnter
} from '@ionic/react';

type ListOfPeopleProps = {
    id: number
}

const ListOfPeople: React.FC<ListOfPeopleProps> = ({ id }) => {
    const [ shift, setShift ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    useIonViewWillEnter(() => {
        fetch(`http://localhost:3000/shift/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setShift(res);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <IonSpinner color="primary" />
    }

    if (isError) {
        return <IonText color="danger">Si è verificato un errore.</IonText>
    }

    return (
        <IonList>
            {shift.map(({ person, count }, index) => {
                if (person) {
                    const { name } = person;

                    return (
                        <IonItem key={index}>
                            <IonRow className="ion-align-items-center ion-justify-content-between">
                                <IonCol size="auto">
                                    <IonBadge color="primary">{count}</IonBadge>
                                </IonCol>
                                <IonCol>
                                    <IonText>{name}</IonText>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                    )
                }
                return null;
            })}
        </IonList>
    )
}

export default ListOfPeople;
