import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Calendar, ArrowRight } from "lucide-react"

const Blog = () => {
  return (
    <div>
      {/* Blog Section */}
      <section id="blog" className="py-22 px-18">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#FFD93D] font-bold text-foregrond  font-Volkhov uppercase mb-4">Latest from Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with the latest trends, insights, and best practices in technology and digital innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                title: "The Future of Web Development in 2024",
                excerpt: "Exploring emerging trends and technologies that will shape the web development landscape.",
                date: "Dec 15, 2024",
                author: "Sarah Chen",
                image: "images/web-development-coding-future-technology.jpg",
              },
              {
                title: "Building Scalable Applications with Microservices",
                excerpt: "A comprehensive guide to designing and implementing microservice architectures.",
                date: "Dec 10, 2024",
                author: "Marcus Rodriguez",
                image: "images/microservices-architecture-cloud-computing.jpg",
              },
              {
                title: "UX Design Principles for Modern Applications",
                excerpt: "Essential design principles that create exceptional user experiences in digital products.",
                date: "Dec 5, 2024",
                author: "Emily Johnson",
                image: "images/ux-design-user-interface-modern-app.jpg",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 ">
            <Button variant="outline"className=' bg-[#FFD93D]/50 hover:bg-[#FFD93D]/90' size="lg">
              View All Posts <ArrowRight className="ml-2 w-4 h-4 " />
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog
