import React from 'react'
import { Card} from "@/components/ui/card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, Zap, Shield, Users, Clock, CheckCircle } from "lucide-react";

const Why = () => {
  return (
    // <div>
      <section id="why-choose-us" className="py-38 px-18 bg-white/30">
        {/* <div className="container mx-auto max-w-6xl"> */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#FFD93D] font-bold font-Volkhov mb-8 text-balance">Why Choose BrightHub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Proven Expertise</CardTitle>
                <CardDescription>
                  Over 5 years of experience delivering successful projects across various industries and technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100+ Projects Completed</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Industry-Leading Standards</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Certified Professionals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Speed */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription>
                  Rapid development and deployment without compromising on quality or performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Agile Development Process</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quick Turnaround Times</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Optimized Performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security measures to protect your data and ensure compliance with industry standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>End-to-End Encryption</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>GDPR Compliant</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Regular Security Audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Dedicated Support</CardTitle>
                <CardDescription>
                  24/7 customer support with a dedicated team that understands your business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 Technical Support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Comprehensive Documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Cutting-Edge Tech</CardTitle>
                <CardDescription>
                  We stay ahead of the curve with the latest technologies and industry best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Modern Tech Stack</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AI & Machine Learning</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cloud-Native Solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Reliability */}
            <Card className="border-0 shadow-lg hover:shadow-lg transition-transform transform  hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">99.9% Uptime</CardTitle>
                <CardDescription>
                  Reliable infrastructure and monitoring ensure your applications are always available when you need
                  them.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Redundant Infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automated Backups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          </section>
    // {/* </div> */}
  )
}

export default Why;
