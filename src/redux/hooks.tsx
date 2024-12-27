import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// 타입 강화된 Hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 아래 과정중 state:RootState를 선행으로 가져가서 
// const tasks = useSelector((state:RootState)=>state.tasks);
// 컴포넌트 내부에서 아래와 값이 사용하기 위함 ( RootState를 따로 import안하고 사용할 수 있음 )
// const tasks = useAppSelector((state)=>state.tasks);
