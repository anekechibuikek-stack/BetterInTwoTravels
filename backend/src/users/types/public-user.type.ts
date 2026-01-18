import { Role } from '../../common/enums/role.enum';

export type PublicUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  phoneNumber?: string;
  dateOfBirth: string;
  avatarUrl?: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};
