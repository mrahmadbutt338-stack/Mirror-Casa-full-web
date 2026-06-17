import { NextResponse } from 'next/server';

const products = [
  { 
    id: 1, 
    name: 'Luxury Golden Wall Mirror', 
    description: 'Premium golden-framed decorative mirror that adds elegance and sophistication to any living space. Perfect for bedrooms, living rooms, and entryways.', 
    price: 'PKR 15,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20decorative%20golden%20mirror%20elegant%20home%20interior%20high%20quality%203D%20realistic&image_size=landscape_16_9',
    colors: ['Golden', 'Silver', 'Rose Gold', 'Black'],
    shapes: ['Round', 'Square', 'Oval', 'Rectangle'],
    specifications: {
      material: 'Premium Metal Frame',
      size: '24" x 36"',
      weight: '5 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 2, 
    name: 'Modern Minimalist Full-Length Mirror', 
    description: 'Sleek and contemporary full-body mirror with clean lines, ideal for dressing areas and bedrooms. Enhances space with its minimalist design.', 
    price: 'PKR 12,500', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20minimalist%20full%20length%20mirror%20luxury%20bedroom%20design&image_size=landscape_16_9',
    colors: ['White', 'Black', 'Wooden', 'Grey'],
    shapes: ['Rectangle', 'Arch'],
    specifications: {
      material: 'MDF Wood Frame',
      size: '65" x 20"',
      weight: '8 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 3, 
    name: 'Vintage Ornate Mirror', 
    description: 'Timeless vintage-style mirror with intricate ornate details. Adds classic charm and character to traditional and eclectic interiors.', 
    price: 'PKR 20,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage%20ornate%20decorative%20mirror%20luxury%20classic%20living%20room&image_size=landscape_16_9',
    colors: ['Antique Gold', 'Antique Silver', 'Bronze'],
    shapes: ['Oval', 'Round', 'Rectangle'],
    specifications: {
      material: 'Resin & Wood Composite',
      size: '30" x 40"',
      weight: '7 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 4, 
    name: 'Smart LED Backlit Mirror', 
    description: 'Advanced bathroom mirror with integrated LED lighting and touch controls. Perfect for makeup application and creating a luxurious bathroom ambiance.', 
    price: 'PKR 25,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20LED%20backlit%20bathroom%20mirror%20modern%20luxury&image_size=landscape_16_9',
    colors: ['White LED', 'Warm LED', 'RGB LED'],
    shapes: ['Rectangle', 'Round', 'Square'],
    specifications: {
      material: 'Aluminum Frame',
      size: '32" x 24"',
      weight: '6 kg',
      warranty: '2 Years'
    }
  },
  { 
    id: 5, 
    name: 'Artistic Sunburst Mirror', 
    description: 'Stunning sunburst design mirror that serves as a focal point in any room. Brings artistic flair and visual interest to your space.', 
    price: 'PKR 18,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst%20artistic%20decorative%20mirror%20statement%20piece%20luxury&image_size=landscape_16_9',
    colors: ['Gold', 'Silver', 'Copper'],
    shapes: ['Round'],
    specifications: {
      material: 'Metal & Wood',
      size: '36" Diameter',
      weight: '4 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 6, 
    name: 'Geometric Custom Shape Mirror', 
    description: 'Unique geometric design mirror crafted to perfection. Custom-made to match your style and elevate your interior decor.', 
    price: 'PKR Custom', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=geometric%20decorative%20mirror%20modern%20luxury%20home%20decor&image_size=landscape_16_9',
    colors: ['Custom Colors Available'],
    shapes: ['Custom Shapes'],
    specifications: {
      material: 'Custom Materials',
      size: 'Custom Size',
      weight: 'Custom',
      warranty: '1 Year'
    }
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
