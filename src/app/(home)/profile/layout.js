import ProfileLayoat from "../_components/layout/profile/ProfileLayoat";
import AuthProvider from "@/providers/auth-provider";
function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <ProfileLayoat>{children}</ProfileLayoat>
    </AuthProvider>
  );
}

export default ProfileLayout;
