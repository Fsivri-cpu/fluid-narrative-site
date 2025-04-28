
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AssistantSettingsProps {
  onMaxTokensChange: (value: number) => void;
  onTemperatureChange: (value: number) => void;
  maxTokens: number;
  temperature: number;
}

export const AssistantSettings = ({
  onMaxTokensChange,
  onTemperatureChange,
  maxTokens,
  temperature
}: AssistantSettingsProps) => {
  return (
    <div className="h-[600px] space-y-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-800">
      <CardHeader className="p-0">
        <CardTitle className="text-xl font-semibold text-white mb-4">Assistant Settings</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div className="space-y-2">
          <Label className="text-white">Upload RAG Documents</Label>
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <Button variant="ghost" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-sm text-gray-400">Drag & drop files here or click to browse</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Maximum Response Length</Label>
            <Slider
              value={[maxTokens]}
              onValueChange={([value]) => onMaxTokensChange(value)}
              max={2000}
              step={100}
              className="[&_[role=slider]]:bg-blue-500"
            />
            <div className="text-sm text-gray-400">
              {maxTokens} tokens
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Response Creativity</Label>
            <Slider
              value={[temperature]}
              onValueChange={([value]) => onTemperatureChange(value)}
              min={0}
              max={1}
              step={0.1}
              className="[&_[role=slider]]:bg-blue-500"
            />
            <div className="text-sm text-gray-400">
              {temperature} (0 = Precise, 1 = Creative)
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};
