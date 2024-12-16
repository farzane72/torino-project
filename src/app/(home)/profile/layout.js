import ProfileLayoat from "../_components/layout/ProfileLayoat";
import AuthProvider from "@/providers/auth-provider";
function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <ProfileLayoat>{children}</ProfileLayoat>
    </AuthProvider>
  );
}

export default ProfileLayout;
