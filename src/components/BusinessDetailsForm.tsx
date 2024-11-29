'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useDispatch } from 'react-redux';
import { setCurrentStep, updateFormData } from '@/features/formSlice';

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Entertainment",
  "Real Estate",
  "Agriculture",
  "Other"
]

export default function CompanyInfoForm() {
  const [companyName, setCompanyName] = useState('')
  const [industry, setIndustry] = useState('')
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!companyName || !industry) {
      setError('All fields are required')
      return
    }

    dispatch(updateFormData({ businessDetails: { companyName, industry } }));
    dispatch(setCurrentStep(3));
    console.log('Form submitted:', { companyName, industry })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Company Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              placeholder="Enter your company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select value={industry} onValueChange={setIndustry} required>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <CardFooter className="px-0 pt-4">
            <Button type="submit" className="w-full">Next</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

