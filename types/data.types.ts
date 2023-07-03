import { Dispatch, SetStateAction } from "react"

export type Idata= {
    _id : string,
    text: string
  }

export type UpdateData = {
    id:string,
    text:string,
    setText: Dispatch<SetStateAction<string>>,
    setUpdate: Dispatch<SetStateAction<boolean>>,
    setId: Dispatch<SetStateAction<string>>

}