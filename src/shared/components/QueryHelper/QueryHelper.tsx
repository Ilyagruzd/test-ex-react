import { FC } from "react"

interface QueryHelperProps {
    isError: boolean,
    isLoading: boolean
}

export const QueryHelper: FC<QueryHelperProps> = ({ isLoading, isError }) => (
    <>
        { isLoading && <p>Загрузка...</p> }
        { isError && <p>Ошибка...</p> }
    </>    
)
