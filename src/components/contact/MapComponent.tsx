
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// This is a temporary token approach for demo purposes
// In production, this would be stored in environment variables
const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Bengaluru coordinates
  const bengaluruCoordinates = [77.5946, 12.9716]; // [longitude, latitude]

  useEffect(() => {
    // Only initialize map if we have a token and container
    if (!mapToken || !mapContainer.current || map.current) return;

    try {
      mapboxgl.accessToken = mapToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: bengaluruCoordinates,
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add a marker for the office location
      const marker = new mapboxgl.Marker({ color: "#4CAF50" })
        .setLngLat(bengaluruCoordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h3>Waste to Worth Office</h3><p>Bengaluru, Karnataka</p>"
          )
        )
        .addTo(map.current);

      // Open the popup by default
      marker.togglePopup();

      // Cleanup function
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error("Error initializing Mapbox map:", error);
    }
  }, [mapToken]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get("mapboxToken") as string;
    if (token) {
      setMapToken(token);
      setShowTokenInput(false);
    }
  };

  return (
    <Card className="shadow-md h-full">
      <CardContent className="p-0">
        {showTokenInput ? (
          <div className="p-6 flex flex-col items-center justify-center h-64 space-y-4">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-eco-primary mx-auto mb-2" />
              <p className="text-gray-600 mb-4">
                Enter your Mapbox token to view our Bengaluru office location
              </p>
              <form onSubmit={handleTokenSubmit} className="space-y-3">
                <input
                  type="text"
                  name="mapboxToken"
                  placeholder="pk.eyJ1..."
                  className="w-full p-2 border rounded"
                  aria-label="Mapbox public token"
                />
                <p className="text-xs text-gray-500 mb-2">
                  Get your free token at{" "}
                  <a
                    href="https://mapbox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eco-primary underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <button
                  type="submit"
                  className="bg-eco-primary text-white px-4 py-2 rounded hover:bg-eco-secondary transition-colors"
                >
                  Show Map
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div ref={mapContainer} className="h-64 w-full" />
        )}
        <div className="p-6">
          <h3 className="font-semibold mb-2">Our Bengaluru Office</h3>
          <p className="text-gray-600">
            123 Eco Street, Koramangala<br />
            Bengaluru, Karnataka 560034<br />
            India
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
