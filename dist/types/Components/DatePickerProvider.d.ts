import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { IOptions } from "../Options";
interface IDatePickerContext {
    options: IOptions;
    view: Views;
    setView: Dispatch<SetStateAction<Views>>;
    show: boolean;
    setShow: (show: boolean) => void;
    selectedDate: Date;
    changeSelectedDate: (action: "prev" | "next" | "date" | "today", date: Date) => void;
    showSelectedDate: boolean;
    setShowSelectedDate: Dispatch<SetStateAction<boolean>>;
    selectedMonth: number;
    selectedYear: number;
    getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | null | undefined) => string;
}
export declare type Views = "days" | "months" | "years" | "decades";
export declare const DatePickerContext: React.Context<IDatePickerContext>;
interface IDatePickerProviderProps {
    children: ReactElement;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    selectedDateState?: [Date, (date: Date) => void];
}
declare const DatePickerProvider: ({ children, options: customOptions, onChange, show, setShow, selectedDateState }: IDatePickerProviderProps) => JSX.Element;
export default DatePickerProvider;
//# sourceMappingURL=DatePickerProvider.d.ts.map