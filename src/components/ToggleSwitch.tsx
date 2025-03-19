import React from 'react';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

export default function ToggleSwitch({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}
