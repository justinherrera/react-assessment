import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function SuccessCard() {
  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Success!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700">
          You have successfully completed the process.
        </p>
      </CardContent>
    </Card>
  )
}

