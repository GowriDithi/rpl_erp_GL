import * as React from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface PlaceholderProps {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "card" | "text" | "image" | "button" | "table"
  animate?: boolean
  lines?: number
  width?: string | number
  height?: string | number
}

export function Placeholder({
  children,
  className,
  variant = "default",
  animate = true,
  lines = 3,
  width,
  height = "auto"
}: PlaceholderProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "card":
        return "rounded-lg border bg-card p-6 space-y-4"
      case "text":
        return "space-y-2"
      case "image":
        return "rounded-md bg-muted aspect-video flex items-center justify-center"
      case "button":
        return "rounded-md bg-muted h-10 px-4 flex items-center justify-center"
      case "table":
        return "space-y-2"
      default:
        return "p-4 rounded-md bg-muted/20 border border-dashed"
    }
  }

  const renderContent = () => {
    if (children) {
      return children
    }

    switch (variant) {
      case "card":
        return (
          <>
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </>
        )
      
      case "text":
        return Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            className={cn(
              "h-4",
              i === lines - 1 ? "w-3/4" : "w-full"
            )} 
          />
        ))
      
      case "image":
        return (
          <div className="text-muted-foreground text-sm">
            Image placeholder
          </div>
        )
      
      case "button":
        return <Skeleton className="h-4 w-[100px]" />
      
      case "table":
        return (
          <>
            <Skeleton className="h-8 w-full" />
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </>
        )
      
      default:
        return (
          <div className="text-center text-muted-foreground text-sm">
            {animate ? "Loading..." : "No content available"}
          </div>
        )
    }
  }

  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  }

  return (
    <div
      className={cn(getVariantClasses(), className)}
      style={style}
    >
      {renderContent()}
    </div>
  )
}