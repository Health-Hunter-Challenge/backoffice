"use client"

import * as React from "react"
import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  [key: string]: any
}

function useToast() {
  return {
    toasts: [], // Empty array to maintain API compatibility
    toast: ({ title, description, ...props }: ToastProps) => {
      return sonnerToast(title as string, {
        description,
        ...props,
      })
    },
    dismiss: (toastId?: string) => {
      if (toastId) {
        sonnerToast.dismiss(toastId)
      } else {
        sonnerToast.dismiss()
      }
    },
  }
}

export { useToast }
export const toast = sonnerToast
