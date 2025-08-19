import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import logoGreen from "@/assets/images/logo-green.png";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/Auth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const { t } = useTranslation();

  const handleSignIn = async () => {
    setLoading(true);
    await signIn();
    navigate("home");
    setLoading(false);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <Card className="h-screen w-screen max-w-lg p-12 sm:h-screen md:h-auto">
        <CardHeader>
          <div className="flex justify-center">
            <img src={logoGreen} className="w-52" />
          </div>
        </CardHeader>
        <div className="flex w-full flex-col items-center justify-center">
          <label className="border-primary-main font-sans text-2xl font-bold">
            {t("login.title")}
          </label>
          <div className="bg-primary-main h-0.5 w-1/4" />
        </div>
        <Input placeholder={t("login.placeholder-email")} />
        <Input placeholder={t("login.placeholder-password")} type="password" />
        <Button
          variant="default"
          className="bg-primary-main hover:bg-primary-dark mt-4 cursor-pointer text-white"
          onClick={() => handleSignIn()}
          size="lg"
        >
          <span className="font-sans text-lg font-semibold">
            {" "}
            {loading ? t("login.loading-button") : t("login.button")}
          </span>
        </Button>
      </Card>
    </div>
  );
}
