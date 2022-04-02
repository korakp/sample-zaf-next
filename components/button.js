// Create your components here. Example is of a button component when clicked will console.log all tickets
// Don't forget to import useZafClient into any components where requests/actions to the client will be made
import { useZafClient } from '../utils/zafClient';
import settings from '../pages/api/settings';
import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

export default function GardenButton() {
    // invoke client
    const client = useZafClient()

    const getAudits = () => {
        client.request(settings).then(function (data) {
            console.log("ALL AUDITS: ", data)
        })
    }

    return (
        <div>
            <h2>Hello there!</h2>
            <Row>
              <Col textAlign="center">
                 <Button onClick={getAudits}>View audit log</Button>
            </Col>
            </Row>
        </div>
    )
}
