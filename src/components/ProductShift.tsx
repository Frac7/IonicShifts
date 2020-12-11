import React from 'react';

import {
    IonLabel,
    IonText,
} from '@ionic/react';

type ProductShiftProps = {
    item: string,
    current: string
}

const ProductShift: React.FC<ProductShiftProps> = ({ item, current }: ProductShiftProps) => (
    <IonLabel>
        <IonText color="primary">
            <h1>{item}</h1>
        </IonText>
        <IonText>
            <p>{current}</p>
        </IonText>
    </IonLabel>
);

export default ProductShift;

