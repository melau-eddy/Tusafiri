import ToggleSwitch from '@/components/ToggleSwitch';

export default function Facilities() {
  return (
    <div className="hidden gap-3 border-b py-6 lg:flex lg:flex-col">
      <h3 className="text-sm font-semibold">Facilities</h3>

      <div className="flex flex-col gap-2">
        <ToggleSwitch id="facilities" label="Facilities" />
        <ToggleSwitch id="water" label="Water" />
      </div>
    </div>
  );
}
//