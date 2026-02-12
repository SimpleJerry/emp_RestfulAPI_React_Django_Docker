import React, {useEffect} from 'react';
import InforTable from "@/components/InforTable";
import {useSelector} from "react-redux";
import {RootState, RootDispatch} from "@/redux/store";
import {selectId} from "@/redux/empSlice";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {fetchGetEmployeeInfos} from "@/redux/empApi";

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
`


const EmployList = () => {
    const {infos, upInfo} = useSelector((state: RootState) => state.emp);
    const dispatch = useDispatch<RootDispatch>();
    useEffect(() => {
        dispatch(fetchGetEmployeeInfos());
    }, [dispatch, upInfo])
    return (
        <>
            <Buttons>
                {infos.map((info) => (
                    <button
                        key={info.id}
                        onClick={() => dispatch(selectId(info.id))}
                    >
                        {info.name}
                    </button>))
                }
            </Buttons>

            <InforTable/>
        </>
    );
};

export default EmployList;