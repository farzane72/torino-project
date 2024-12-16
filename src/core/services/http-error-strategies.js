//import { ApiError, BadRequestError, NetworkError, NotFoundError, UnauthorizedError, UnhandledException, ValidationError } from "src/types/http-errors.interface";

//export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy = errorData => {
    throw {
        ...errorData,
        detail: errorData.message
    } ;
}


export const validationErrorStrategy = (errorData) => {
    debugger;
    throw { ...errorData } ;
};

export const notFoundErrorStrategy= (errorData) => {
    throw { ...errorData, detail: "سرویس مورد نظر یافت نشد" } 
};

export const forbiddenErrorStrategy = (errorData) => {
    throw {
        ...errorData,
        detail: errorData?.message,
    } ;
};

export const unAuthorizedErrorStrategy = (errorData) => {
    throw {
        ...errorData,
        detail: errorData.message,
    } ;
};


export const unhandledExceptionStrategy = (errorData) => {
    throw { ...errorData, detail: "خطای سرور" } 
};

export const networkErrorStrategy = () => {
    throw { detail: "خطای شبکه" } 
};



export const errorHandler = {
    400: (errorData) => (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(errorData),
    403: forbiddenErrorStrategy,
    401: unAuthorizedErrorStrategy,
    404: notFoundErrorStrategy,
    500: unhandledExceptionStrategy,
}