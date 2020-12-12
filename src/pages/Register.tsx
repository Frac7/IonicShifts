import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import BasePage from './BasePage';
import {
    IonCol,
    IonRow,
    IonText,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonProgressBar,
    IonToast
} from '@ionic/react';

type RegisterProps = {
    history: any
}

const Register: React.FC<RegisterProps> = ({ history }: RegisterProps) => {
    const { id } = useParams();
    const [ item, setItem ] = useState('');

    useEffect(() => {
        // API call...
        setItem('Scottex');
    }, [id]);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        if (isLoading) {
            // API call...
            setTimeout(() => history.goBack(), 1500);
        }
    }, [isLoading, history]);

    const [ person, setPerson ] = useState(-1);

    return (
        <BasePage title="Aggiungi Turno" content={(
            <>
                {isLoading && (
                    <IonRow className="ion-align-items-center ion-justify-content-between">
                        <IonCol>
                            <IonProgressBar type="indeterminate" color="primary"/>
                        </IonCol>
                    </IonRow>
                )}
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
                            {['Francesca C.', 'Fra e Chiara', 'Giuseppe', 'Alessandro'].map((item, index) => (
                                <IonSelectOption key={index} value={index}>{item}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center ion-justify-content-end">
                    <IonCol size="auto">
                        <IonButton color="primary" disabled={isLoading || person === -1} onClick={() => {
                            setIsLoading(true);
                        }}>
                            Aggiungi
                        </IonButton>
                    </IonCol>
                </IonRow>
                {isError && (
                    <IonToast
                        isOpen={isError}
                        onDidDismiss={() => {
                            setIsLoading(false);
                            setIsError(false);
                        }}
                        message="Si è verificato un errore"
                        position="bottom"
                        buttons={[
                            {
                                text: 'Chiudi',
                                role: 'cancel',
                            }
                        ]}
                    />
                )}
            </>
        )} />
    )
}

export default Register;
