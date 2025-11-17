import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ShoppingCart, MapPin, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-roti-sobek.jpg";
import rotiCokelat from "@/assets/roti-cokelat.jpg";
import rotiKeju from "@/assets/roti-keju.jpg";
import rotiKombinasi from "@/assets/roti-kombinasi.jpg";
import kueUlangTahun from "@/assets/kue-ulang-tahun.jpg";
import bouquetCake from "@/assets/bouquet-cake.jpg";
import rotiGurih from "@/assets/roti-gurih.jpg";

const WHATSAPP_URL = "https://wa.me/6285393095264";

const products = [
  {
    image: rotiCokelat,
    name: "Roti Sobek Cokelat Lumer",
    description: "Perpaduan roti super lembut dengan isian cokelat premium yang meleleh di mulut.",
    cta: "Pesan Ini"
  },
  {
    image: rotiKeju,
    name: "Roti Sobek Keju Premium",
    description: "Rasa gurih dan creamy dari isian keju berkualitas berpadu dengan lembutnya roti.",
    cta: "Pesan Ini"
  },
  {
    image: rotiKombinasi,
    name: "Roti Sobek Kombinasi (Mix)",
    description: "Nikmati 2 rasa atau lebih dalam satu loyang. Pilihan sempurna untuk berbagi.",
    cta: "Pesan Ini"
  },
  {
    image: kueUlangTahun,
    name: "Kue Ulang Tahun Custom",
    description: "Rayakan momen spesial dengan kue custom premium dari Upies Bakery.",
    cta: "Konsultasi Kue"
  },
  {
    image: bouquetCake,
    name: "Bouquet 'n Cake",
    description: "Hadiah unik dan lezat untuk orang terkasih. Buket yang bisa dimakan!",
    cta: "Pesan Bouquet"
  },
  {
    image: rotiGurih,
    name: "Roti Sobek Gurih (Abon/Sosis)",
    description: "Pilihan gurih dengan isian abon sapi premium atau sosis berkualitas.",
    cta: "Pesan Ini"
  }
];

const testimonials = [
  {
    text: "Rotinya benar-benar selembut itu! Rasanya premium dan beda dari yang lain. Anak-anak suka banget.",
    author: "Ibu Sarah"
  },
  {
    text: "Pesan untuk acara arisan, semua tamu muji. Packaging-nya juga rapi. Pasti repeat order.",
    author: "Ibu Dina"
  },
  {
    text: "Juara banget lembutnya. Dihangatin lagi besoknya aja masih empuk. Recommended!",
    author: "Bapak Andi"
  }
];

const orderSteps = [
  {
    step: "1",
    title: "Pilih Produk Anda",
    description: "Lihat katalog kami dan tentukan pilihan roti atau kue Anda."
  },
  {
    step: "2",
    title: "Klik Tombol WhatsApp",
    description: "Konfirmasi pesanan Anda, alamat, dan jadwal pengiriman via WhatsApp."
  },
  {
    step: "3",
    title: "Roti Fresh Tiba!",
    description: "Duduk santai dan tunggu roti fresh from the oven kami tiba di depan pintu Anda."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">U</span>
            </div>
            <span className="text-xl font-bold text-primary">Upies Bakery</span>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Pesan Sekarang
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Tekstur Lembut Mewah,<br />Rasa Juara di Setiap Sobekan.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Selamat datang di Upies Bakery, spesialis roti sobek rumahan premium. 
            Dibuat fresh setiap hari hanya untuk Anda, tanpa bahan pengawet.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-2xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Pesan Roti Sobek Anda!
            </a>
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Pilih Varian Favorit Anda
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Setiap produk dibuat dengan cinta dan bahan premium
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Apa Kata Pelanggan Setia Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 italic text-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Pesan Semudah 1-2-3!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {orderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Mulai Pesan Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-2xl">U</span>
                </div>
                <span className="text-2xl font-bold">Upies Bakery</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/90">
                  Jl. Jakarta, Perum Korpri,<br />Blok BK No. 3
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Link Penting</h3>
              <ul className="space-y-2">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Pesan via WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-accent transition-colors">
                    Katalog Produk
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-accent transition-colors">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
              <a 
                href="https://instagram.com/upiesbakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
                @upiesbakery
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>© 2025 Upies Bakery. Dibuat dengan cinta.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
