import { PartCommon } from '../common.interfaces';

//CREATE PART
export interface CreatePartResult extends PartCommon {
  id: string
  imageUrl: string
  quantity: number
}

//GET ALL PARTS
export interface GetAllPartResult extends PartCommon {
  id: string
  imageUrl: string
  quantity: number
}