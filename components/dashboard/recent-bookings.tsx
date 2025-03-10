import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentBookings() {
  return (
    <div className="space-y-8">
      {recentBookings.map((booking) => (
        <div key={booking.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={booking.avatar} alt="Avatar" />
            <AvatarFallback>{booking.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{booking.name}</p>
            <p className="text-sm text-muted-foreground">{booking.destination}</p>
          </div>
          <div className="ml-auto font-medium">{booking.amount}</div>
        </div>
      ))}
    </div>
  )
}

const recentBookings = [
  {
    id: "1",
    name: "Mohamed Ahmed",
    destination: "Dubai, UAE",
    amount: "$1,999.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Amina Hassan",
    destination: "Paris, France",
    amount: "$2,499.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Abdikarim Farah",
    destination: "Tokyo, Japan",
    amount: "$3,299.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Hodan Ali",
    destination: "New York, USA",
    amount: "$1,899.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Yusuf Ibrahim",
    destination: "Sydney, Australia",
    amount: "$2,799.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

