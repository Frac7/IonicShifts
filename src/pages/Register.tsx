import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';

import BasePage from './BasePage';
import {
    IonCol,
    IonRow,
    IonText,
    IonSelect,
    IonSelectOption,
    IonButton
} from '@ionic/react';

type RegisterProps = {
    isLoading: boolean,
    setIsLoading: any,
    setIsError: any
}

const Register: React.FC<RegisterProps> = ({ isLoading, setIsLoading, setIsError }: RegisterProps) => {
    const history = useHistory();
    const { id: product } = useParams();

    const [ item, setItem ] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/products/${product}`)
            .then((res) => res.json())
            .then((res) => {
                setItem(res.name);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [product, setIsLoading, setIsError]);

    const [ people, setPeople ] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/people`)
            .then((res) => res.json())
            .then((res) => {
                setPeople(res);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [product, setIsLoading, setIsError]);

    const [ person, setPerson ] = useState(-1);

    const handleIncrement = useCallback(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/shift/${product}/${person}`, { method: 'POST' })
            .then((res) => res.json())
            .then(() => {
                setIsLoading(false);
                history.goBack();
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [setIsLoading, setIsError, history, product, person]);

    return (
        <>
            <IonRow className="ion-align-items-center ion-justify-content-between">
                <IonCol className="ion-text-center">
                    <IonText color="primary">
                        <h1>{item}</h1>
                    </IonText>
                    <IonText>
                        Registrazione turno
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-between">
                <IonCol>
                    <IonSelect value={person} onIonChange={(event: any) => setPerson(event.target.value)}>
                        {people.map(({ name, _id }, index) => (
                            <IonSelectOption key={index} value={_id}>{name}</IonSelectOption>
                        ))}
                    </IonSelect>
                </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-end">
                <IonCol size="auto">
                    <IonButton color="primary" disabled={isLoading || person === -1} onClick={handleIncrement}>
                        Aggiungi
                    </IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}

export default () => <BasePage title="Aggiungi Turno" Content={Register} />;
