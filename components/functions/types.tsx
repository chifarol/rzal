export type VehicleArrayType = VehicleType[] | [];

export type VehicleType = {
  id: number;
  title: { rendered: string };
  slug: string;
  featured_media: number;
  guid: { rendered: string };
  acf: {
    vehicle_name: string;
    vehicle_description: string;
    vehicle_model: {
      post_name: string;
      post_title: string;
    };
    vehicle_manufacturer: {
      post_name: string;
      post_title: string;
    };
    available: string;
    airconditioned: string;
    transmission: string;
    fuel_type: string;
    number_of_seats: number;
    number_of_doors: number;
    main_image: string;
    images: {
      full_image_url: string;
      thumbnail_image_url: string;
    }[];
  };
};

export type ModelType =
  | {
      id: number;
      title: { rendered: string };
      slug: string;
      acf: {
        description: string;
        disabled: string;
        image: string;
      };
    }[]
  | [];
