import authService from "features/common/authService";
import { useRouter } from "next/router";

export default function redirect() {
  const { getJwtToken } = authService();
  const router = useRouter();

  const jwtToken = getJwtToken();
  if (!jwtToken) {
    router.push("/login");
  }
}
