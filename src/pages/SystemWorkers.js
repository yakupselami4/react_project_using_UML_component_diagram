import React from 'react'
import { Table } from "semantic-ui-react";
export default function SystemWorkers() {
    return (
        <div>
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Çalışan ismi</Table.HeaderCell>
                        <Table.HeaderCell>Çalışan Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Çalışan Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Yakup Selami</Table.Cell>
                        <Table.Cell>Öztürk</Table.Cell>
                        <Table.Cell>yakupselami@email.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
