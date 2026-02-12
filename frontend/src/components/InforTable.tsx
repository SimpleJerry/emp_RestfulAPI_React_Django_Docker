import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import styled from "styled-components";

const Table = styled.table`
    width: 450px;
    margin: 0 auto;
    border-collapse: collapse;
    font-family: Arial sans-serif;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    table-layout: fixed;
`

const Th = styled.th`
    background-color: #f2f2f2;
    color: #333;
    padding: 12px 15px;
    text-align: center;
    border-bottom: 2px solid #ddd;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9em;
`

const Td = styled.td`
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    text-align: center;
    color: #555;
`

const InforTable = () => {
    const {upInfo} = useSelector((state: RootState) => state.emp);
    return (
        <Table>
            <thead>
            <tr>
                {Object.keys(upInfo).map(((prop, idx) => <Th key={idx}>{prop}</Th>))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {Object.values(upInfo).map(((value, idx) => <Td key={idx}>{value}</Td>))}
            </tr>
            </tbody>
        </Table>
    );
};

export default InforTable;