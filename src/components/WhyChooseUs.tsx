import WhyUsCard from './WhyChooseUsCard';
import Support from '../../public/support.svg';
import PaymentSvg from '../../public/payment.svg';
import TimeSvg from '../../public/time.svg';

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl font-bold tracking-wide">
        Why <span className="text-red-400 ">Choose</span> Us ?
      </h1>

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-7">
        <WhyUsCard
          description="Pay with M-pesa, credit cards or bank transfers. We got you fully covered."
          heading="Flexible payments"
          imageSrc={PaymentSvg}
        />

        <WhyUsCard
          heading="Great customer care"
          description="Get excellent customer service available 8:00 AM to 10:00 PM, via phone, chat or email."
          imageSrc={Support}
        />

        <WhyUsCard
          heading="Enjoy convenience"
          description="Book anytime at the convenience of your office, home, school, or market."
          imageSrc={TimeSvg}
        />
      </div>
    </div>
  );
}
