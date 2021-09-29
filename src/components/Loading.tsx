import {FC} from "react"
import {LoadingOutlined} from "@ant-design/icons"

export const Loading: FC = () => {
    return (
        <div className="loading">
            <LoadingOutlined/>
        </div>
    )
}