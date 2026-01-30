import Link from 'next/link'
import { Fish, ArrowLeft } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
          <Fish className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FishLog</span>
        </Link>
        <CardTitle className="text-2xl">Elfelejtett jelszo</CardTitle>
        <CardDescription>
          Add meg az email cimed es kuldunk egy linket a jelszo
          visszaallitasahoz
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="pelda@email.com"
              required
            />
          </div>
          <Button type="submit" className="mt-2 w-full">
            Visszaallito link kuldese
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Vissza a bejelentkezeshez
        </Link>
      </CardFooter>
    </Card>
  )
}
