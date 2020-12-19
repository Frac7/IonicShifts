import React from 'react';
import { IonToast } from '@ionic/react';

type ErrorToastProps = {
    setIsLoading: any,
    setIsError: any
}

const ErrorToast: React.FC<ErrorToastProps> = ({ setIsLoading, setIsError }) => (
    <IonToast
        isOpen
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
);

export default ErrorToast;
