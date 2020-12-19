import React, {useEffect, useState} from 'react';

import {
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    IonRow,
    IonCol,
    IonSpinner
} from '@ionic/react';

import { arrowDropright } from 'ionicons/icons'

import BasePage from './BasePage';

type HomeProps = {
    history: any
}

const Home: React.FC<HomeProps> = ({ history }: HomeProps) => {
    const [ items, setItems ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
                setIsLoading(false);
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <IonSpinner color="primary" />
    }

    if (isError) {
        return <IonText color="danger">Si è verificato un errore.</IonText>
    }

    return (
        <BasePage title="Turni Acquisto Prodotti" content={
            <IonList>
                {items.map(({ name }, index) => (
                    <IonItem onClick={() => history.push(`/details/${index}`)} key={index}>
                        <IonLabel>
                            <IonRow className="ion-align-items-center ion-justify-content-between">
                                <IonCol size="10">
                                    <IonText color="primary">
                                        <h1>{name}</h1>
                                    </IonText>
                                </IonCol>
                                <IonCol size="auto">
                                    <IonIcon size="large" icon={arrowDropright}/>
                                </IonCol>
                            </IonRow>
                        </IonLabel>
                    </IonItem>
                ))}
            </IonList>
        } />
    );
}

export default Home;
