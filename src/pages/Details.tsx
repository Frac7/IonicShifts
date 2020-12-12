import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonList,
    IonItem,
    IonBadge,
    IonText,
    IonRow,
    IonCol,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import { add } from 'ionicons/icons';

import BasePage from './BasePage';

type DetailsProps = {
    history: any
}

type DetailsState = {
    name: string,
    caption: number
}

const Details: React.FC<DetailsProps> = ({ history }) => {
    const { id } = useParams();

    const [ product, setProduct ] = useState<DetailsState>({
        name: '',
        caption: 0
    });

    useEffect(() => {
        // API call...
        setProduct({ name: 'Scottex', caption: id });
    }, [id]);

    return (
        <BasePage title="Dettagli" content={(
            <>
            <IonCard>
                <IonCardHeader className="ion-text-center">
                    <IonCardTitle>
                        <IonText color="primary">
                            <h1>{product.name}</h1>
                        </IonText>
                    </IonCardTitle>
                    <IonCardSubtitle>
                        {product.caption} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas feugiat sapien vitae euismod.
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                        {[
                            { name: 'Francesca C.', shifts: 2 },
                            { name: 'Fra e Chiara', shifts: 1 },
                            { name: 'Alessandro', shifts: 1 },
                            { name: 'Giuseppe', shifts: 1 }
                            ].map(({ name, shifts }, index) => (
                            <IonItem key={index}>
                                <IonRow className="ion-align-items-center ion-justify-content-between">
                                    <IonCol size="auto">
                                        <IonBadge color="primary">{shifts}</IonBadge>
                                    </IonCol>
                                    <IonCol>
                                        <IonText>{name}</IonText>
                                    </IonCol>
                                </IonRow>
                            </IonItem>
                        ))}
                    </IonList>
                </IonCardContent>
            </IonCard>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton size="small" color="primary" onClick={() => history.push(`/register/${id}`)}>
                    <IonIcon icon={add}/>
                </IonFabButton>
            </IonFab>
            </>
        )} />
    )
}

export default Details;
