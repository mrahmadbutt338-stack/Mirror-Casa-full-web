import { NextResponse } from 'next/server';

const services = [
  { 
    id: 1, 
    name: 'Home Delivery', 
    description: 'We deliver mirrors to your doorstep safely and securely. Our delivery team handles your mirrors with extreme care.', 
    icon: 'truck' 
  },
  { 
    id: 2, 
    name: 'Professional Installation', 
    description: 'Our expert team fits any type of mirror with precision and professionalism, ensuring perfect installation every time.', 
    icon: 'wrench' 
  },
  { 
    id: 3, 
    name: 'Custom Sizing', 
    description: 'Made-to-measure mirrors crafted exactly to your specifications. Any size, any shape you desire.', 
    icon: 'ruler' 
  },
  { 
    id: 4, 
    name: 'On-Site Consultation', 
    description: 'We visit your location to guide you on the best mirror options and placement for your space.', 
    icon: 'home' 
  },
  { 
    id: 5, 
    name: 'Glass Partition Work', 
    description: 'Modern glass partitions for offices and homes, creating elegant and functional spaces.', 
    icon: 'column' 
  },
  { 
    id: 6, 
    name: 'Frame & Border Customization', 
    description: 'Custom frames and borders to match your interior design style perfectly.', 
    icon: 'image' 
  },
];

export async function GET() {
  return NextResponse.json(services);
}
