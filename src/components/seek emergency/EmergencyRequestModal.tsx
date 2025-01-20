import React from 'react';
import { Emergency } from '@/types/all-types';
import { EmergencyForm } from './EmergencyForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EmergencyRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (emergency: Emergency) => void;
}

export function EmergencyRequestModal({ isOpen, onClose, onSubmit }: EmergencyRequestModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] w-full p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">Seek Emergency Assistance</DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below to request immediate help for blood donation emergencies.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 sm:grid-cols-2">
          <EmergencyForm onSubmit={onSubmit} onCancel={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

