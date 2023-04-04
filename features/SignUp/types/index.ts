export interface SignUpResponse {
  nickName: string;
  email: string;
  password: string;
  profileImage: File[];
  memberType: "OWNER" | "ADMIN" | "CUSTOMER";
  phoneNumber: string;
  signUpType: "EMAIL" | "GOOGLE";
}

