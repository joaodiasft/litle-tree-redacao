"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { copyToClipboard } from "@/lib/copy"
import { useToast } from "@/hooks/use-toast"

interface CopyButtonProps {
  text: string
  label?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function CopyButton({
  text,
  label = "address",
  variant = "outline",
  size = "default",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    const success = await copyToClipboard(text, label)
    if (success) {
      setCopied(true)
      toast({
        title: "Copiado!",
        description: "Endereço copiado para a área de transferência.",
        variant: "success",
      })
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Copiado!
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" />
          Copiar
        </>
      )}
    </Button>
  )
}
