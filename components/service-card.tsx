import {
  Search,
  Share2,
  FileText,
  Mail,
  MousePointer,
  BarChart2,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  Target,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Search":
        return <Search className="h-6 w-6" />
      case "Share2":
        return <Share2 className="h-6 w-6" />
      case "FileText":
        return <FileText className="h-6 w-6" />
      case "Mail":
        return <Mail className="h-6 w-6" />
      case "MousePointer":
        return <MousePointer className="h-6 w-6" />
      case "BarChart2":
        return <BarChart2 className="h-6 w-6" />
      case "Smartphone":
        return <Smartphone className="h-6 w-6" />
      case "Globe":
        return <Globe className="h-6 w-6" />
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6" />
      case "Users":
        return <Users className="h-6 w-6" />
      case "Target":
        return <Target className="h-6 w-6" />
      case "Zap":
        return <Zap className="h-6 w-6" />
      default:
        return <Zap className="h-6 w-6" />
    }
  }

  return (
    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
