import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
}

export default function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="mb-4">
          {/* Quote icon */}
          <svg className="h-8 w-8 text-purple-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>

        <p className="text-gray-600 mb-6">{quote}</p>

        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
