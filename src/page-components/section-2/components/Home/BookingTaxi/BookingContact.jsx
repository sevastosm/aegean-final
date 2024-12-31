import Image from "next/image";
import Link from "next/link";
import callText from "../../../../assets/booking/text-call-icon.svg";
import textWhats from "../../../../assets/booking/text-whats.svg";

const BookingContact = () => {
  return (
    <div>
      <div className="mt-6 px-4 flex items-center justify-between gap-1">
        <Link
          href="tel:+905552222222"
          className="w-[152px] h-[42px] rounded-lg border bg-black text-white flex items-center gap-4 text-xl font-bold font-SFProBold call-shadow px-2"
        >
          <Image src={callText} alt="callText" className="pt-1.5" />
          Call us
        </Link>
        <Link
          href={"https://wa.me/+905552222222"}
          className="w-[152px] h-[42px] flex items-center justify-center bg-[#25D366] what-app-shadow rounded-lg"
        >
          <Image src={textWhats} alt="textWhats" className="pt-1.5" />
        </Link>
      </div>
    </div>
  );
};

export default BookingContact;
