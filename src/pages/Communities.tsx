import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunityCard from "@/components/CommunityCard";
import { communities } from "@/data/mockData";
import { useState } from "react";
import SurinMap from "@/assets/map-surin.jpg";

export {SurinMap};


const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-accent/10 thai-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              ชุมชนโอทอป
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              มาพบกับชุมชนช่างฝีมือมากความสามารถผู้อยู่เบื้องหลังผลิตภัณฑ์แท้ของเรากันเถอะ!
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search communities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Map Placeholder */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">  
          <h1 className="font-display text-2xl md:text-2xl font-bold text-foreground mb-4">แผนที่จังหวัดสุรินทร์</h1>       
          <div className="aspect-[21/9] bg-muted flex items-center justify-center">
            <div className="text-center">              
              <img src={SurinMap} alt="surin map" />
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              คอมมูนิตี้ทั้งหมด
            </h2>
            <p className="text-muted-foreground">
              {filteredCommunities.length} คอมมูนิตี้
            </p>
          </div>

          {filteredCommunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommunities.map((community, index) => (
                <div
                  key={community.id}
                  className="animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <CommunityCard {...community} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                ไม่พบชุมชนใดที่ตรงกับการค้นหาของคุณ
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Communities;
