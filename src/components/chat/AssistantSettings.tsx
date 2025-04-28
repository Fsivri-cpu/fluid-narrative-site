
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
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
    <div className="h-[600px] chat-container">
      <div className="chat-glow-effect"></div>
      <div className="h-full space-y-4 p-4 bg-gray-900/95 backdrop-blur-xl rounded-lg border border-blue-500/20 relative z-10">
        <h2 className="text-xl font-semibold text-white mb-4">Assistant Settings</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-300">Upload RAG Documents</Label>
            <div className="border-2 border-dashed border-gray-700/50 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors cursor-pointer">
              <Button variant="ghost" className="w-full h-24 flex flex-col items-center justify-center space-y-2">
                <Upload className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-400">Drag & drop files here or click to browse</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Instructions for Assistant</Label>
            <Textarea 
              placeholder="Enter your instructions for the AI assistant here..."
              className="min-h-[100px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-300">Maximum Response Length</Label>
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
              <Label className="text-gray-300">Response Creativity</Label>
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
        </div>
      </div>
    </div>
  );
};
