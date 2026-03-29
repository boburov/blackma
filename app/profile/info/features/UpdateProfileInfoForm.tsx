import { Pen } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Image from "next/image";

export default function UpdateProfileInfoFunction() {
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
            src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
            alt="profile pic"
            className="w-full h-full object-cover aspect-square rounded-full"
            width={112}
            height={112}
          />
        </label>
        <Input type="file" id="avatar" className="hidden" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Ism</label>
        <Input type="string" id="name" name="name" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="tel">Telefon</label>
        <Input type="tel" id="tel" name="phone" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="gender">Jinsi</label>
        <Select id="gender" name="gender">
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
          <option value="unknown">{`Ko'rsatilmagan`}</option>
        </Select>
      </div>
      <Button>{`O'zgarishlarni saqlash`}</Button>
    </form>
  );
}
