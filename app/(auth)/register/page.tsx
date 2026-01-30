import Link from 'next/link'
import { Fish } from 'lucide-react'
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

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
          <Fish className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FishLog</span>
        </Link>
        <CardTitle className="text-2xl">Regisztracio</CardTitle>
        <CardDescription>
          Hozd letre fiokodat es kezdd el rogziteni fogasaidat
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nev</Label>
            <Input id="name" type="text" placeholder="Kovacs Janos" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="pelda@email.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Jelszo</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password-confirm">Jelszo megerositese</Label>
            <Input id="password-confirm" type="password" required />
          </div>
          <Button type="submit" className="mt-2 w-full">
            Fiok letrehozasa
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Mar van fiokod?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Bejelentkezes
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
