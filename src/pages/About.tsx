import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { heroImage, landscapeImage } from "@/data/mockData";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Authentic Craftsmanship",
      description:
        "Every product is handcrafted using traditional techniques passed down through generations.",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "We empower local artisans and communities, ensuring fair prices and sustainable livelihoods.",
    },
    {
      icon: Users,
      title: "Cultural Preservation",
      description:
        "Our mission is to preserve and promote the rich cultural heritage of Surin Province.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "All products meet OTOP quality standards, guaranteeing authenticity and excellence.",
    },
  ];

  const timeline = [
    {
      year: "Traditional Era",
      title: "Ancient Craftsmanship",
      description:
        "For centuries, Surin artisans have perfected the art of silk weaving and traditional crafts.",
    },
    {
      year: "2001",
      title: "OTOP Initiative Launch",
      description:
        "Thailand's One Tambon One Product program begins, recognizing local craftsmanship.",
    },
    {
      year: "2010",
      title: "Digital Expansion",
      description:
        "Surin OTOP products gain national and international recognition through digital platforms.",
    },
    {
      year: "Present",
      title: "Modern Heritage",
      description:
        "Blending tradition with innovation, Surin OTOP continues to thrive in the global marketplace.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 thai-pattern" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                เกี่ยวกับเรา
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                เรื่องราวของ <span className="text-primary">Surin OTOP</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                จังหวัดสุรินทร์ตั้งอยู่ภาคอีสานใต้ของประเทศไทย เป็น
                ดินแดนที่ประเพณีมาบรรจบกับศิลปะ โครงการ OTOP ของเราเฉลิมฉลอง
                มรดกนี้โดยการเชื่อมโยงช่างฝีมือผู้เชี่ยวชาญกับลูกค้าผู้มีรสนิยม
                ทั่วโลก
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                จากลวดลายอันซับซ้อนของผ้าไหมมัดหมี่ไปจนถึงฝีมือประณีตของตะกร้าสานด้วยมือ
                แต่ละผลิตภัณฑ์ล้วนบอกเล่าเรื่องราวของความทุ่มเท ทักษะ
                และความภาคภูมิใจทางวัฒนธรรม เราเชื่อมั่นในการค้าที่เป็นธรรม การปฏิบัติที่ยั่งยืน
                และการอนุรักษ์ประเพณีที่ทำให้สุรินทร์มีเอกลักษณ์เฉพาะตัว
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/products">
                  สำรวจผลิตภัณฑ์ของเรา
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-slide-in-right opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={landscapeImage}
                  alt="Surin landscape"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              ค่านิยมของเรา
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              สิ่งที่เรายืนหยัดเพื่อ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                variant="feature"
                className="text-center animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              การเดินทางของเรา
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              มรดกแห่งความเป็นเลิศ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute left-0 top-0 h-full w-px bg-border">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary" />
                </div>
                <div className="ml-6">
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-earth text-earth-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                สุรินทร์ดินแดนแห่งช้าง
              </h2>
              <p className="text-earth-foreground/80 leading-relaxed mb-6">
                จังหวัดสุรินทร์มีชื่อเสียงระดับโลกในฐานะ "อาณาจักรช้าง" ของประเทศไทย
                ความเชื่อมโยงกับสัตว์ที่สง่างามเหล่านี้สะท้อนให้เห็นในเอกลักษณ์ทางวัฒนธรรมของเรา
                และผลิตภัณฑ์ OTOP หลายอย่างของเรา
              </p>
              <p className="text-earth-foreground/80 leading-relaxed mb-8">
                เทศกาลต้อนช้างสุรินทร์ประจำปีดึงดูดผู้มาเยือนจากทั่วทุกมุมโลก 
                เพื่อเฉลิมฉลองความผูกพันอันลึกซึ้งระหว่างชาวสุรินทร์และช้างอันเป็นที่รัก 
                ความสำคัญทางวัฒนธรรมนี้ถูกถักทอเข้าไปในงานฝีมือท้องถิ่นของเรา
              </p>
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">
                    จ.สุรินทร์
                  </span>
                  <span className="text-sm text-earth-foreground/60">
                    Surin Province
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">
                    อีสาน
                  </span>
                  <span className="text-sm text-earth-foreground/60">
                    Isan Region
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Surin elephant heritage"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            พร้อมค้นพบขุมทรัพย์แห่งสุรินทร์แล้วหรือยัง?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            สำรวจคอลเล็กชั่นผลิตภัณฑ์ OTOP แท้ของเรา และสนับสนุนชุมชนช่างฝีมือมากความสามารถของจังหวัดสุรินทร์
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/products">เรียกดูผลิตภัณฑ์</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/communities">พบกับชุมชนของเรา</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
