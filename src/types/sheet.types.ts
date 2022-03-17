import IUser from "./user.types";

type ISheet = {
  _id: string;
  enabled: boolean;
  fname: string;
  lname: string;
  sex: string;
  dateOfBirth: Date;
  nationality: string;
  bloodType: string;
  smoker: boolean;
  user: Pick<IUser, "email">;
}

export default ISheet;
