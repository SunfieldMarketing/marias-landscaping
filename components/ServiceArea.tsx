import Icon from "./Icon";
import { site } from "@/lib/site-config";

export default function ServiceArea() {
  const cities = [
    "Hemet", "San Jacinto", "Menifee", "Winchester", 
    "Homeland", "Idyllwild", "Perris", "Sun City",
    "Murrieta", "Temecula", "Lake Elsinore", "Beaumont",
    "Banning", "Moreno Valley", "Rancho Bernardo", "North Park San Diego"
  ];

  const zips = [
    "92543, 92544, 92545",
    "92581, 92582, 92583",
    "92584, 92585, 92586",
    "92596",
    "92548",
    "92570",
    "92562",
    "92590"
  ];

  return (
    <section className="bg-surface-100 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text & Lists */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Proudly Serving Southern California</h2>
            <p className="text-lg text-gray-600 mb-10">
              We bring our expert landscaping and tree services to a wide range of communities across the region.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Cities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Cities We Serve</h3>
                <ul className="space-y-2">
                  {cities.slice(0, 8).map((city) => (
                    <li key={city} className="flex items-center text-gray-600">
                      <Icon name="mapPin" className="h-4 w-4 text-accent-600 mr-2 flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zip Codes */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Zip Codes</h3>
                <ul className="space-y-2">
                  {zips.map((zip) => (
                    <li key={zip} className="text-gray-600">
                      {zip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="bg-gray-200 w-full h-[400px] lg:h-full min-h-[400px] relative overflow-hidden flex items-center justify-center border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.49841804246!2d-117.0607611!3d33.7475147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6e3bf29c8ab1%3A0x6b8bc2ec96216895!2sHemet%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-90"
              title="Service Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
