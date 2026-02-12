import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Form, Input, Label} from "@/components/Register";
import {useDispatch, useSelector} from "react-redux";
import {tempEmp} from "@/redux/empSlice";
import {Employee} from "@/types/type";
import {RootDispatch, RootState} from "@/redux/store";
import {fetchGetEmployeeInfos, fetchPutEmployeeInfos} from "@/redux/empApi";

const Update = () => {
    const {upInfo} = useSelector((state: RootState) => state.emp);
    const [empInfo, setEmpInfo] = useState<Employee>(upInfo);
    const dispatch = useDispatch<RootDispatch>();

    useEffect(() => {
        setEmpInfo(upInfo);
    }, [upInfo]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEmpInfo(prev => ({...prev, [name]: value}));
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchPutEmployeeInfos(empInfo));
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
            <button type="submit">수정</button>
        </Form>
    );
};

export default Update;