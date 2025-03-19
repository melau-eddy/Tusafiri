import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

export default function Footer() {
  return (
    <Card className=" mt-20 rounded-none border-x-0 border-t bg-background py-10 text-card-foreground">
      <div className="flex flex-col gap-3 px-6 md:grid md:grid-cols-3 md:px-16">
        <CardContent className=" md:text-center">
          <CardTitle>About Us</CardTitle>
          <CardDescription className="mt-1">
            Safari aims to bring ease and convenience to millions of Kenyan travellers. We work with the country’s
            leading bus operators to bring you the convenience of digital bookings.
          </CardDescription>
        </CardContent>

        <CardContent className="md:text-center">
          <CardTitle>Contact us</CardTitle>
          <CardDescription className="mt-1 flex flex-col gap-0.5">
            <span>+ 254 727 533 551</span>
            <span>+ 254 727 533 551</span>
          </CardDescription>
        </CardContent>

        <CardContent className="md:text-center">
          <CardTitle>Our Offices</CardTitle>
          <CardDescription className="mt-1 flex flex-col">
            <span>Vision Towers, Nairobi</span>
            <span>Wazalendo plaza, Eldoret</span>
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}
