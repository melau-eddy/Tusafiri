import ToggleSwitch from '@/components/ToggleSwitch';

export default function BusOperators() {
  return (
    <div className="hidden gap-3 py-6 lg:flex lg:flex-col">
      <h3 className="text-sm font-semibold">BusOperators</h3>

      <div className="flex flex-col gap-2 text-nowrap">
        <ToggleSwitch id="easyCoach" label="Easy Coach" />
        <ToggleSwitch id="guardianBus" label="Guardian Bus" />
        <ToggleSwitch id="transLine" label="Transline Bus" />
        <ToggleSwitch id="northRift" label="North Rift Sacco" />
        <ToggleSwitch id="embasavva" label="Embasava Luxury Fleet" />
        <ToggleSwitch id="lopha" label="Lopha Travellers" />
      </div>
    </div>
  );
}
