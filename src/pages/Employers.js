import React from 'react'
import { Table } from "semantic-ui-react";


export default function Employers() {

  return (
    <div>
      <Table celled inverted="top">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şirket Websitesi</Table.HeaderCell>
            <Table.HeaderCell>Şirket Email Adresi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Microsoft</Table.Cell>
            <Table.Cell>www.microsoft.com</Table.Cell>
            <Table.Cell>support.microsoft.com</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>CD Projekt Red</Table.Cell>
            <Table.Cell>en.cdprojektred.com</Table.Cell>
            <Table.Cell>media@cdprojektred.com.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

  )
}
