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

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
          <Fish className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FishLog</span>
        </Link>
        <CardTitle className="text-2xl">Bejelentkezes</CardTitle>
        <CardDescription>
          Add meg az email cimed es jelszavad a belepeshez
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Jelszo</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Elfelejtetted?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="mt-2 w-full">
            Bejelentkezes
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Nincs meg fiokod?{' '}
          <Link href="/register" className="text-primary hover:underline">
            Regisztracio
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
