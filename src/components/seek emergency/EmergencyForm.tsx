import React, { useState } from "react";
import { Emergency } from "@/types/all-types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface EmergencyFormProps {
  onSubmit: (emergencyData: Omit<Emergency, "id" | "status">) => void;
  onCancel: () => void;
}

export function EmergencyForm({ onSubmit, onCancel }: EmergencyFormProps) {
  const [formData, setFormData] = useState<Omit<Emergency, "id" | "status">>({
    bloodType: "",
    location: "",
    hospitalName: "",
    contactName: "",
    contactPhone: "",
    urgency: "medium",
    additionalInfo: "",
    createdAt: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto space-y-6 p-6 border rounded-lg bg-white shadow-md"
    >
      <h2 className="text-xl font-semibold text-gray-800">Emergency Form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Blood Type */}
        <div>
          <Label htmlFor="bloodType">Blood Type Needed</Label>
          <Select
            name="bloodType"
            value={formData.bloodType}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, bloodType: value }))}
            required
          >
            <SelectTrigger id="bloodType" className="mt-2">
              <SelectValue placeholder="Select blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter location"
            className="mt-2"
          />
        </div>

        {/* Hospital Name */}
        <div>
          <Label htmlFor="hospitalName">Hospital Name</Label>
          <Input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
            placeholder="Enter hospital name"
            className="mt-2"
          />
        </div>

        {/* Contact Name */}
        <div>
          <Label htmlFor="contactName">Contact Name</Label>
          <Input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            placeholder="Enter contact name"
            className="mt-2"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <Label htmlFor="contactPhone">Contact Phone</Label>
          <Input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
            placeholder="Enter contact phone"
            className="mt-2"
          />
        </div>

        {/* Urgency Level */}
        <div>
          <Label htmlFor="urgency">Urgency Level</Label>
          <Select
            name="urgency"
            value={formData.urgency}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, urgency: value as "low" | "medium" | "high" }))
            }
            required
          >
            <SelectTrigger id="urgency" className="mt-2">
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Enter any additional information"
          rows={3}
          className="mt-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Submit Emergency Request</Button>
      </div>
    </form>
  );
}
