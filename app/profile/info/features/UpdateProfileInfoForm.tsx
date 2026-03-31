"use client"
import { Pen } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Image from "next/image";
import Man from "@/assets/profiles/profile.jpg"
import useTranslate from "@/app/hooks/useTranslate";

export default function UpdateProfileInfoFunction() {
  const { t } = useTranslate();
  return (
    <form action="PATCH" className="space-y-3">
      <div>
        <label
          htmlFor="avatar"
          className="w-28 h-28 border border-slate-300 flex p-2 rounded-full relative"
        >
          <span className="bg-blue-500 absolute text-white p-2 rounded-full border-2 border-white top-0 right-0">
            <Pen size={16} />
          </span>
          <Image
            src={Man}
            alt="profile pic"
            className="w-full h-full object-cover aspect-square rounded-full"
            width={112}
            height={112}
          />
        </label>
        <Input type="file" id="avatar" className="hidden" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">{t("profile.name")}</label>
        <Input type="string" id="name" name="name" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="tel">{t("profile.phone")}</label>
        <Input type="tel" id="tel" name="phone" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="gender">{t("profile.gender")}</label>
        <Select id="gender" name="gender">
          <option value="male">{t("profile.male")}</option>
          <option value="female">{t("profile.female")}</option>
          <option value="unknown">{t("profile.not_specified")}</option>
        </Select>
      </div>
      <Button>{t("profile.save_changes")}</Button>
    </form>
  );
}
