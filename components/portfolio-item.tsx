import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface PortfolioItemProps {
  title: string
  category: string
  image: string
  result: string
}

export default function PortfolioItem({ title, category, image, result }: PortfolioItemProps) {
  return (
    <Card className="border-0 shadow-md overflow-hidden group">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <p className="font-bold">{result}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-purple-600 mb-1">{category}</p>
            <h3 className="font-bold">{title}</h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
