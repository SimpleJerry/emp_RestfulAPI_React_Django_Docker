"use client"
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Employee} from "@/types/type";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {tempEmp} from "@/redux/empSlice";
import {fetchGetEmployeeInfos, fetchPostEmployeeInfos} from "@/redux/empApi";
import {RootDispatch} from "@/redux/store";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const Label = styled.label`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #333;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
`


const Register = () => {
    const [empInfo, setEmpInfo] = useState<Employee>(tempEmp);
    const dispatch = useDispatch<RootDispatch>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEmpInfo(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchPostEmployeeInfos(empInfo));
        setEmpInfo(tempEmp);
        dispatch(fetchGetEmployeeInfos());
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Label>Name
                <Input
                    type="text"
                    name="name"
                    value={empInfo.name}
                    onChange={handleChange}
                />
            </Label>
            <Label>Age
                <Input
                    type="number"
                    name="age"
                    value={empInfo.age}
                    onChange={handleChange}
                />
            </Label>
            <Label>Job
                <Input
                    type="text"
                    name="job"
                    value={empInfo.job}
                    onChange={handleChange}
                />
            </Label>
            <Label>Language
                <Input
                    type="text"
                    name="language"
                    value={empInfo.language}
                    onChange={handleChange}
                />
            </Label>
            <Label>Pay
                <Input
                    type="number"
                    name="pay"
                    value={empInfo.pay}
                    onChange={handleChange}
                />
            </Label>
            <button type="submit">등록</button>
        </Form>
    );
};

export default Register;