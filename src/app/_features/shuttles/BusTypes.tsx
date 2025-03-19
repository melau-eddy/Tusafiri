import ToggleSwitch from '@/components/ToggleSwitch';

export default function BusTypes() {
  return (
    <div className="hidden gap-3 border-b pb-6 lg:flex lg:flex-col">
      <h3 className="text-sm font-semibold ">Bus Type</h3>

      <div className="flex flex-col gap-2 text-nowrap ">
        <ToggleSwitch id="executive" label="Executive" />
        <ToggleSwitch id="" label="VIP" />
        <ToggleSwitch id="business" label="Business" />
        <ToggleSwitch id="normal" label="Normal" />
      </div>
    </div>
  );
}
//