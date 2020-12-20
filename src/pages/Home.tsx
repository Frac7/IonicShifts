import React, {useEffect, useState} from 'react';

import {
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    IonRow,
    IonCol
} from '@ionic/react';

import { arrowDropright } from 'ionicons/icons'

import BasePage from './BasePage';
import {useHistory} from "react-router";

type HomeProps = {
    setIsLoading: any,
    setIsError: any
}

const Home: React.FC<HomeProps> = ({ setIsLoading, setIsError }: HomeProps) => {
    const history = useHistory();

    const [ items, setItems ] = useState([]);

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
    }, [setIsError, setIsLoading]);

    return (
        <IonList>
            {items.map(({ name, _id }) => (
                <IonItem onClick={() => history.push(`/details/${_id}`)} key={_id}>
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
    );
}

export default () => <BasePage title="Turni Acquisto Prodotti" Content={Home} />;
