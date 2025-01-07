import BuyButton from "@/app/(home)/_components/modules/buttons/RezerveButton";
import PersonalInfoForm from "@/app/(home)/_components/template/profile/PersonalInfoForm";
import { serverFetch } from "@/core/services/http-server";

export default async function ReservePage({ params }) {
  const resolvedParams = await params;

  const { tourId } = resolvedParams;
  const data = await serverFetch(`tour/${tourId}`, "", { cache: "no-store" });
  console.log(data);
  return <PersonalInfoForm data={data} />;
}
