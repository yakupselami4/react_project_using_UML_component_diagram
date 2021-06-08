import React from 'react'
import { Table } from "semantic-ui-react";
export default function JobSeekers() {
    return (
        <div>
            <Table celled inverted="top">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>iş Arayan İsim</Table.HeaderCell>
                        <Table.HeaderCell>iş Arayan Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>iş Arayan Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Yakup Selami</Table.Cell>
                        <Table.Cell>Öztürk</Table.Cell>
                        <Table.Cell>yakupselami@email.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Burak</Table.Cell>
                        <Table.Cell>Öztürk</Table.Cell>
                        <Table.Cell>burakozturk@email.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
