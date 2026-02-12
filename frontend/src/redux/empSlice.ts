import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    fetchDeleteEmployeeInfos,
    fetchGetEmployeeInfos,
    fetchPostEmployeeInfos,
    fetchPutEmployeeInfos
} from "@/redux/empApi";
import {Employee} from "@/types/type";


export const tempEmp: Employee = {
    id: "", name: "", age: 0, job: "", language: "", pay: 0
}

export type Mode = "" | "register" | "update" | "delete" | "reset"

export interface ModeItems {
    id: Mode;
    label: string;
}

export const modes: ModeItems[] = [
    {id: "register", label: "Register"},
    {id: "update", label: "Update"},
    {id: "delete", label: "Delete"},
    {id: "reset", label: "Reset"},
]

interface EmpState {
    mode: Mode,
    selectedId: string,
    upInfo: Employee,
    infos: Employee[],
    error: string | null,
    loading: boolean,
}

const initialState: EmpState = {
    mode: "",
    selectedId: "",
    upInfo: tempEmp,
    infos: [],
    error: null,
    loading: false,
}

const empSlice = createSlice({
    name: "empSlice",
    initialState,
    reducers: {
        selectId(state: EmpState, action: PayloadAction<string>) {
            // console.log("selectId：", action.payload)
            state.selectedId = action.payload
            state.upInfo = state.infos.filter(info => info.id === action.payload)[0]
        },
        changeMode(state: EmpState, action: PayloadAction<Mode>) {
            state.mode = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetEmployeeInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetEmployeeInfos.fulfilled, (state, action) => {
                state.loading = false;
                state.infos = action.payload;
            })
            .addCase(fetchGetEmployeeInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "load failed";
            })
            .addCase(fetchPostEmployeeInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPostEmployeeInfos.fulfilled, (state, action) => {
                state.loading = false;
                state.upInfo = action.payload;
            })
            .addCase(fetchPostEmployeeInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "load failed";
            })
            .addCase(fetchPutEmployeeInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPutEmployeeInfos.fulfilled, (state, action) => {
                state.loading = false;
                state.infos = state.infos.map(info =>
                    (
                        info.id === state.selectedId ?
                            {...action.payload, id: String(info.id)} :
                            info
                    )
                )
                state.upInfo = action.payload;
            })
            .addCase(fetchPutEmployeeInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "load failed";
            })
            .addCase(fetchDeleteEmployeeInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDeleteEmployeeInfos.fulfilled, (state) => {
                state.loading = false;
                console.log("delete", state.mode)
                if (state.mode == "delete") {
                    state.infos = state.infos.filter(info => info.id !== state.selectedId);
                    state.upInfo = tempEmp;

                }
            })
            .addCase(fetchDeleteEmployeeInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "load failed";
            })
    }
})

export const {selectId, changeMode} = empSlice.actions;
export default empSlice.reducer;