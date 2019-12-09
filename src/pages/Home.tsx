import {
    IonCol,
    IonContent, IonFab, IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonDatetime, IonModal, IonButtons, IonMenuButton
} from '@ionic/react';
import { calendar, add } from 'ionicons/icons';
import React from 'react';

import data from '../data.json';

import Calendar from '../components/Calendar';
import CalendarCreation from '../components/CalendarCreation';

interface HomeState {
    date: string | null | undefined;
    showModal: boolean;
}

class Home extends React.Component<any, HomeState> {

    constructor(props: any) {
        super(props);

        this.state = {
            date: new Date().toISOString().substr(0, 10),
            showModal: false
        };
    }

    changeDate(data: any) {
        this.setState({
            date: data.detail.value
        });
    }

    setShowModal(show: boolean) {
        this.setState({
            showModal: show
        })
    }

    render() {
        let elements = [];
        for(let i = 0; i < data.calendar.length; i++) {
            elements.push(
                <IonRow key={i}>
                    <IonCol className="ion-text-center">
                        <Calendar selectedDate={this.state.date}
                                    calendarId={i}/>
                    </IonCol>
                </IonRow>);
        }

        return (
          <IonPage>
              <IonHeader>
                  <IonToolbar color="light">
                      <IonButtons slot="start">
                          <IonMenuButton color="dark" auto-hide="false"/>
                      </IonButtons>
                      <IonTitle className="ion-text-center">Calendario Turni</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                  <IonRow className="ion-align-items-center ion-justify-content-center">
                      <IonCol className="ion-text-center" size="1">
                          <IonIcon icon={calendar} color="light"/>
                      </IonCol>
                      <IonCol className="ion-text-center" size="6">
                          <IonDatetime displayFormat="DD / MM / YYYY"
                                       placeholder="Select Date"
                                       value={this.state.date}
                                       onIonChange={this.changeDate.bind(this)}>
                          </IonDatetime>
                      </IonCol>
                  </IonRow>
                  {elements}
                  <IonFab vertical="bottom" horizontal="end" slot="fixed">
                      <IonFabButton size="small" color="light"
                                    onClick={() => this.setShowModal.call(this, true)}>
                          <IonIcon icon={add} />
                      </IonFabButton>
                  </IonFab>

                  <IonModal isOpen={this.state.showModal}>
                    <CalendarCreation dismissModal={() => {this.setShowModal.call(this, false)}}/>
              </IonModal>
              </IonContent>
          </IonPage>
          );
  }
}

export default Home;
