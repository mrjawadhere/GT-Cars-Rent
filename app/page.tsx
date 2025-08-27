"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Shield, Clock, Star, Phone, MapPin, Mail } from "lucide-react"

const cars = [
  {
    name: "Accent 2023",
    rate: 2400,
    currency: "AED",
    duration: "Monthly",
    image: "/hyundai-accent-2023-luxury-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "monthly",
  },
  {
    name: "Kia Pegas 2024",
    rate: 2550,
    currency: "AED",
    duration: "Monthly",
    image: "/kia-pegas-2024-compact-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "monthly",
  },
  {
    name: "Sunny 2023",
    rate: 1800,
    currency: "AED",
    duration: "Monthly",
    image: "/nissan-sunny-2023-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "monthly",
  },
  {
    name: "Corolla 2023",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/toyota-corolla-2023-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Elantra 2023",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/hyundai-elantra-2023-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Hyundai Accent 2024",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/hyundai-accent-2024-modern-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Hyundai Creta",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/hyundai-creta-suv.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Kia Pegas 2024",
    rate: 110,
    currency: "AED",
    duration: "Daily",
    image: "/kia-pegas-2024-economy-sedan.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Toyota Raize",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/toyota-raize-compact-suv.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
  {
    name: "Yaris 2024",
    rate: 130,
    currency: "AED",
    duration: "Daily",
    image: "/toyota-yaris-2024-hatchback.png",
    cta: "https://wa.me/971586987873",
    category: "daily",
  },
]

const features = [
  {
    icon: Car,
    title: "Luxury & Comfort",
    description: "A fleet of high-end vehicles designed for style and performance.",
  },
  {
    icon: Shield,
    title: "Affordable Rates",
    description: "Premium service at competitive prices.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Plans",
    description: "Hourly, daily, weekly, or monthly options.",
  },
  {
    icon: Star,
    title: "Exceptional Service",
    description: "Hassle-free booking and customer support.",
  },
]

const steps = ["Browse our premium fleet.", "Book your car online with ease.", "Pick up your car and enjoy the ride."]

const categories = [
  "Luxury Sedans for business and comfort",
  "SUVs for family and adventure",
  "Sports Cars for thrill seekers",
  "Exotic Cars for standout experiences",
]

export default function GTCarsRentLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const monthlyCars = cars.filter((car) => car.category === "monthly")
  const dailyCars = cars.filter((car) => car.category === "daily")

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-red-500/5 to-rose-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      <header className="relative z-10 px-4 py-6 md:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              GT Cars Rent
            </span>
          </div>
          <Button
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open("https://wa.me/971586987873", "_blank")}
          >
            Book Now
          </Button>
        </nav>
      </header>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent animate-pulse">
                Luxury Cars.
              </span>{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                Smart Prices.
              </span>{" "}
              <span className="text-slate-900">Unforgettable Rides.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto text-pretty">
              Where luxury meets affordability. Experience premium vehicles at smart prices with flexible rental
              options. Whether it's daily adventures or monthly commitments, we deliver exceptional value and
              unforgettable experiences.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open("https://wa.me/971586987873", "_blank")}
            >
              Book Your Dream Car
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-rose-500">GT Cars Rent</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It <span className="text-rose-500">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Drive More, Pay Less</h2>
                <p className="text-xl text-white/90 text-pretty">
                  Exclusive deals on premium cars. Limited time offers for smart drivers.
                </p>

                {/* Discount Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">30%</div>
                    <div className="font-semibold mb-1">Weekend Special</div>
                    <div className="text-sm text-white/80">Friday to Sunday rentals</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">25%</div>
                    <div className="font-semibold mb-1">Business Rate</div>
                    <div className="text-sm text-white/80">Corporate bookings</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => window.open("https://wa.me/971586987873", "_blank")}
                  >
                    Claim Your Deal
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                    onClick={() => window.open("https://wa.me/971586987873", "_blank")}
                  >
                    View All Deals
                  </Button>
                </div>
              </div>

              {/* Right Content - Featured Car */}
              <div className="relative">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl relative">
                  {/* Featured Badge */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-yellow-400 text-yellow-900 px-4 py-2 text-sm font-bold rounded-full">
                      FEATURED
                    </Badge>
                  </div>

                  {/* Car Image */}
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src="/hyundai-elantra-2023-sedan.png"
                      alt="Hyundai Elantra 2025 N"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Car Details */}
                  <div className="text-gray-900">
                    <h3 className="text-2xl font-bold mb-2">Hyundai Elantra 2025 N</h3>
                    <p className="text-gray-600 mb-4">Sporty • 4 doors • Performance driven</p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-rose-600">AED 300</span>
                        <span className="text-gray-600">Per day</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">AED 380</div>
                        <div className="text-sm font-semibold text-green-600">Save 20%</div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      onClick={() => window.open("https://wa.me/971586987873", "_blank")}
                    >
                      Book This Deal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-rose-500">Fleet Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-gray-700">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Premium <span className="text-rose-500">Fleet</span>
          </h2>

          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full">
                <span className="text-2xl">🚗</span>
                <h3 className="text-xl font-bold">Monthly Cars</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthlyCars.map((car, index) => (
                <Card
                  key={`monthly-${index}`}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">
                          {car.currency} {car.rate}
                        </span>
                        <span className="text-gray-600 ml-1">/ {car.duration}</span>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {car.duration}
                      </Badge>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(car.cta, "_blank")}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full">
                <span className="text-2xl">🚗</span>
                <h3 className="text-xl font-bold">Daily / Per Day Cars</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {dailyCars.map((car, index) => (
                <Card
                  key={`daily-${index}`}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-emerald-600">
                          {car.currency} {car.rate}
                        </span>
                        <span className="text-gray-600 ml-1">/ {car.duration}</span>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        {car.duration}
                      </Badge>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(car.cta, "_blank")}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-20 md:px-8 bg-gradient-to-r from-rose-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Dream Car Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
            Travel in style with GT Cars Rent. Your perfect ride is just a click away.
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open("https://wa.me/971586987873", "_blank")}
          >
            Book Now on WhatsApp
          </Button>
        </div>
      </section>

      <footer className="relative z-10 px-4 py-12 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GT Cars Rent</span>
              </div>
              <p className="text-gray-400">Premium car rental service for luxury and comfort.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 58 698 7873</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@gtcarsrent.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Book</h3>
              <Button
                className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://wa.me/971586987873", "_blank")}
              >
                WhatsApp Booking
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GT Cars Rent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
