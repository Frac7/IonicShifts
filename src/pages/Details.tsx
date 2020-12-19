import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonText,
    IonFab,
    IonFabButton,
    IonIcon, IonSpinner
} from '@ionic/react';

import { add } from 'ionicons/icons';

import BasePage from './BasePage';
import { ListOfPeople } from '../components';

type DetailsProps = {
    history: any
}

type DetailsState = {
    name: string,
    description: string
}

const Details: React.FC<DetailsProps> = ({ history }) => {
    const { id } = useParams();

    const [ product, setProduct ] = useState<DetailsState>({
        name: '',
        description: ''
    });

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
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
                        {product.description}
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <ListOfPeople id={id}/>
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
