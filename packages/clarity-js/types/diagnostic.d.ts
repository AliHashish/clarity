import { Code, Severity, Target } from "./data";

/* Event Data */
export interface ScriptErrorData {
    source: string;
    message: string;
    line: number;
    column: number;
    stack: string;
}

export interface ImageErrorData {
    source: string;
    target: Target;
    region?: number;
}

export interface LogData {
    code: Code;
    name: string;
    message: string;
    stack: string;
    severity: Severity;
}